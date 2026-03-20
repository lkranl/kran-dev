import { useEffect } from "react";

export default function About() {
  const theme = localStorage.getItem("theme") || "light";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen px-6 pt-20 pb-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold md:text-4xl">About</h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-start">
          {/* Main content */}
          <article className="md:col-span-7">
            <div className="prose prose-invert max-w-none">
              <p className="text-text-muted">
                I’ve worked non-professionally with multiple technologies and
                other areas. I’m constantly studying new releases for my
                knowledge, reinforcing it. I enjoy learning, and I’m very
                interested in Machine Learning and research in general.
              </p>

              <p className="mt-4 text-text-muted">
                I’m also focused on Web Development—building reliable,
                user-friendly products with modern frontend practices. I’m
                especially interested in React-based UI engineering and building
                scalable web applications.
              </p>

              <p className="mt-4 text-text-muted">
                I enjoy learning languages and I’m currently bilingual (Spanish
                and English), deciding on what language to learn next. I can
                teach and spread my accumulated knowledge, and I work well in
                teams—sharing ideas and helping manage delivery with agile
                methodologies.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-border bg-surface/60 p-6">
                <h2 className="text-xl font-semibold">How I work</h2>
                <ul className="mt-4 space-y-2 text-text-muted">
                  <li>
                    Agile collaboration: planning, stand-ups, retrospectives,
                    ownership.
                  </li>
                  <li>
                    Clean architecture and modular design for maintainability.
                  </li>
                  <li>
                    Reliable integrations: error handling, normalization, and
                    iteration.
                  </li>
                  <li>
                    Leadership when needed: mentoring and aligning technical
                    decisions.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-6">
                <h2 className="text-xl font-semibold">Work experience</h2>
                <p className="mt-2 text-sm text-text-muted">
                  Full-stack development across data platforms, cloud
                  deployments, and agile product delivery.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="border-l-2 border-border pl-4">
                    <h3 className="font-semibold">
                      Full Stack Engineer — BKDF | Brooklyn Design Factory
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                      Oct 2025 – Present • Part-time • Remote
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-muted">
                      <li>
                        Built and maintained a data scraping platform for
                        structured business data delivery.
                      </li>
                      <li>
                        Designed backend APIs/services in Python with Django
                        REST Framework and FastAPI.
                      </li>
                      <li>
                        Improved ingestion pipeline reliability with
                        normalization, validation, and error handling.
                      </li>
                      <li>
                        Owned delivery timelines and technical decisions as an
                        independent contractor.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-border pl-4">
                    <h3 className="font-semibold">
                      Full Stack Engineer — AccelOne
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                      Aug 2025 – Nov 2025 • Contract • Remote
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-muted">
                      <li>
                        Built responsive React.js + TypeScript interfaces for
                        client products.
                      </li>
                      <li>
                        Developed backend APIs and business logic with Python
                        (Django/Flask).
                      </li>
                      <li>
                        Collaborated daily with UX/UI, QA, and product teams in
                        Agile workflows.
                      </li>
                      <li>
                        Supported cloud deployment and CI/CD processes using
                        Azure and GitHub Actions.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-border pl-4">
                    <h3 className="font-semibold">
                      Technical Lead — Contractor Campus
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                      Jun 2022 – May 2024 • Contract • Remote
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-muted">
                      <li>
                        Led Scrum team delivery for web development using PHP,
                        JavaScript, and Joomla.
                      </li>
                      <li>
                        Managed MariaDB operations and deployment infrastructure
                        on DigitalOcean.
                      </li>
                      <li>
                        Implemented Kubernetes orchestration and CI/CD with
                        GitHub Actions.
                      </li>
                      <li>
                        Ran sprint ceremonies and aligned technical execution
                        with business priorities.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-border pl-4">
                    <h3 className="font-semibold">
                      Full Stack Developer — Logify (Freelance)
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                      Mar 2015 – Jul 2022 • Freelance • Remote
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-muted">
                      <li>
                        Delivered full-stack web solutions across multiple
                        industries and project types.
                      </li>
                      <li>
                        Built frontends with React/Angular/Vue and backends with
                        Django/Flask/Node.js.
                      </li>
                      <li>
                        Designed relational + NoSQL data models and integrated
                        REST/GraphQL APIs.
                      </li>
                      <li>
                        Implemented secure auth flows and automated deployments
                        with CI/CD tooling.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-border pl-4">
                    <h3 className="font-semibold">
                      Frontend Developer — Codemak
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                      Jul 2021 – Nov 2021 • Contract • Hybrid
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-muted">
                      <li>
                        Translated mockups into responsive React interfaces
                        connected to DRF APIs.
                      </li>
                      <li>
                        Worked closely with design and backend teams to deliver
                        reliable user flows.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-6">
                <h2 className="text-xl font-semibold">Tech & strengths</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "React",
                    "Django",
                    "FastAPI",
                    "TypeScript",
                    "Docker",
                    "Kubernetes",
                    "REST APIs",
                    "GraphQL",
                    "CI/CD",
                    "Agile / Scrum",
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
            </div>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 md:sticky md:top-20">
            <div className="rounded-2xl border border-border bg-surface/60 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Resume</h2>
              <p className="mt-2 text-sm text-text-muted">Download a copy of my resume with the most relevant information and contact me for any questions.</p>
              <a type="button" className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-primary-foreground hover:bg-primary-hover active:bg-primary-active transition-colors" href="/Andres-resume.pdf" download="Andres-resume.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
              <hr className="my-4 border-border" />
              <h2 className="text-xl font-semibold">LinkedIn</h2>

              <div
                className="mt-4 badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme={theme}
                data-type="VERTICAL"
                data-vanity="kran-cruz"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://co.linkedin.com/in/kran-cruz/en?trk=profile-badge"
                ></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
