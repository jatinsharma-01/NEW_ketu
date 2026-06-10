'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'STUDIO' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/services', label: 'SERVICES' },
    { href: '/whyus', label: 'WHY US' },
    { href: '/insights', label: 'INSIGHTS' },
  ]

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo.png" alt="Ketu Design Studio" width={120} height={52} />
        </Link>
      </div>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link.href} className={pathname === link.href ? 'active' : ''}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-cta">
        <Link href="/contact" className="consultation-btn-nav">BOOK CONSULTATION</Link>
      </div>
    </nav>
  )
}
