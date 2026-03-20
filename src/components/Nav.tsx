import { Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import logo from '../assets/logo.svg';

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = useMemo(() => [
    { to: '/', label: 'Home' },
    //{ to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/80 border-b border-border/80 backdrop-blur supports-backdrop-filter:bg-surface/60">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex text-lg font-semibold tracking-tight text-text hover:text-primary transition-colors"
          >
            <img src={logo} alt="logo" className="w-6 h-6" />
            kran
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    ' flex items-center justify-center gap-2 rounded-lg px-3 py-2 transition-colors',
                    'border border-transparent',
                    'hover:text-primary hover:bg-surface-2',
                    isActive ? 'text-primary bg-surface-2 border-primary' : 'text-text',
                  ].join(' ')}
                >
                  <svg className="w-4 h-4" aria-hidden="true">
                    <use href={`/icons.svg#${link.label.toLowerCase()}`} />
                  </svg>
                  {link.label}
                </Link>
              </li>
            )})}
          </ul>

          {/* Mobile navigation button */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text hover:bg-surface-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg className="w-6 h-6" aria-hidden="true">
              <use href={open ? '/icons.svg#close' : '/icons.svg#menu'} />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <div className="pb-4 h-screen md:hidden">
            <ul className="flex flex-col gap-2 px-4">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li
                    className={[
                      "w-full text-center flex items-center justify-center gap-2"].join(' ')}
                    key={link.label}
                  >
                    <Link
                      to={link.to}
                      aria-current={isActive ? 'page' : undefined}
                      className={[
                        'w-full rounded-lg px-3 py-2 transition-colors border-b flex items-center justify-center gap-2',
                        isActive ? 'text-primary bg-surface-2 border-primary' : 'text-text border-border hover:bg-surface-2 hover:text-primary',
                      ].join(' ')}
                      onClick={() => setOpen(false)}
                    >
                      <svg className="w-4 h-4" aria-hidden="true">
                        <use href={`/icons.svg#${link.label.toLowerCase()}`} />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}