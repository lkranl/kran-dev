import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl">404</h1>
      <p className="mt-2 text-text-muted">Page not found.</p>
      <Link className="text-primary hover:text-primary-hover" to="/">Go home</Link>
    </section>
  )
}