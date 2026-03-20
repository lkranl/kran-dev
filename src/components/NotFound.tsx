import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-24 pb-12">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-80px] h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-20 left-[-80px] h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm text-text-muted">
          Oops, wrong route
        </p>

        <h1 className="mt-6 text-7xl font-semibold tracking-tight text-primary md:text-8xl">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h2>

        <p className="mt-4 max-w-xl text-text-muted">
          The page you’re looking for doesn’t exist, may have moved, or the URL might be incorrect.
          Try returning to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-primary-foreground transition-colors hover:bg-primary-hover active:bg-primary-active"
          >
            Back to Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-text-muted">
          Error code: <span className="font-semibold text-text">NOT_FOUND_404</span>
        </p>
      </div>
    </section>
  )
}