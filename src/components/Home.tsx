import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="min-h-screen px-6 pt-20 pb-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-text-muted">
              Full Stack Engineer • Python • React • Cloud
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Rodrigo Andrés (Kran) Cruz Morales
            </h1>

            <p className="mt-4 max-w-prose text-lg leading-relaxed text-text-muted">
              I build scalable web applications and backend services—especially data-driven
              features like APIs, ingestion pipelines, and integrations. I’m also deeply
              interested in Machine Learning and research, and I’m always studying new releases
              to keep my skills current.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-primary-foreground hover:bg-primary-hover active:bg-primary-active transition-colors"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-4 py-2.5 text-text hover:bg-surface-2 transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Python",
                "React",
                "Django",
                "FastAPI",
                "TypeScript",
                "Docker",
                "Kubernetes",
                "Azure",
                "AWS",
                "CI/CD",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface/60 px-3 py-1 text-sm text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-border bg-surface/60 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">What I’m focused on</h2>
              <ul className="mt-4 space-y-2 text-text-muted">
                <li>Scalable backend services & APIs (Django/DRF, FastAPI)</li>
                <li>Responsive, interactive React UI (TypeScript + best practices)</li>
                <li>Data scraping + ingestion pipelines for business use-cases</li>
                <li>Cloud deployments + CI/CD (GitHub Actions, testing & reviews)</li>
                <li>Agile teamwork and technical leadership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience spotlights */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h3 className="text-lg font-semibold">BKDF | Brooklyn Design Factory</h3>
            <p className="mt-1 text-sm text-text-muted">Full Stack Engineer • Part-time • Remote</p>
            <ul className="mt-4 space-y-2 text-text-muted">
              <li>Built/maintained a data scraping platform for structured data delivery.</li>
              <li>Implemented scalable backend APIs with Python (Django Rest Framework / FastAPI).</li>
              <li>Optimized ingestion pipelines for accuracy, efficiency, and reliability.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h3 className="text-lg font-semibold">AccelOne</h3>
            <p className="mt-1 text-sm text-text-muted">Full Stack Engineer • Contract • Remote</p>
            <ul className="mt-4 space-y-2 text-text-muted">
              <li>Designed responsive React interfaces (TypeScript + modern UI patterns).</li>
              <li>Developed robust backend logic with Python (Django/Flask) and databases.</li>
              <li>Worked in Agile with UX/UI, QA, and product—shipping with strong engineering quality.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}