import { useRef, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Turnstile } from "@marsidev/react-turnstile"

export default function Contact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_SPREE_PROJECT_ID)
  const [turnstileToken, setTurnstileToken] = useState("")
  const turnstileRef = useRef<any>(null)

  return (
    <section className="min-h-screen px-6 pt-20 pb-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Contact</h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          I’m open to full-time opportunities, contract work, and technical collaborations.
          If you have a project or role in mind, I’d love to hear about it.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Left card: Form */}
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h2 className="text-xl font-semibold">Let’s connect</h2>

            {state.succeeded ? (
              <p className="mt-4 rounded-lg border border-border bg-surface px-4 py-3 text-text">
                Thanks! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-text outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-text outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Turnstile token expected by backend */}
                <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />

                <Turnstile
                  ref={turnstileRef}
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                />

                <button
                  type="submit"
                  disabled={state.submitting || !turnstileToken}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-primary-foreground transition-colors hover:bg-primary-hover active:bg-primary-active disabled:cursor-not-allowed disabled:opacity-60"
                  onClick={() => {
                    if (!turnstileToken) turnstileRef.current?.reset()
                  }}
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Right card: keep your current quick info */}
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h2 className="text-xl font-semibold">Quick info</h2>
            <ul className="mt-4 space-y-2 text-text-muted">
              <li><strong className="text-text">Location:</strong> Restrepo, Meta, Colombia</li>
              <li><strong className="text-text">Languages:</strong> Spanish (Native), English (C2)</li>
              <li><strong className="text-text">Focus:</strong> Full Stack (React + Python)</li>
              <li><strong className="text-text">Timezone:</strong> GMT-5</li>
              <li><strong className="text-text">Response time:</strong> Usually within 24h</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}