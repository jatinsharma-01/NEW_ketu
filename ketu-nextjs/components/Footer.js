import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Image src="/images/logo.png" alt="Ketu Design Studio" width={120} height={52} className="footer-logo" />
          <p className="brand-pitch">
            Transforming workspace architecture into elite environments of productivity, innovation, and corporate prestige.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LN</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="tel:+918398801801" aria-label="Phone">PH</a>
          </div>
        </div>
        <div className="footer-links-col">
          <h3>Quick Nav</h3>
          <ul>
            <li><Link href="/">Studio</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/insights">Insights</Link></li>
          </ul>
        </div>
        <div className="footer-links-col">
          <h3>Our Core Services</h3>
          <ul>
            <li><Link href="/services#strategy">Corporate Space Strategy</Link></li>
            <li><Link href="/services#architecture">Bespoke Office Architecture</Link></li>
            <li><Link href="/services#suites">C-Suite Executive Design</Link></li>
            <li><Link href="/services#amenities">Luxury Amenity Planning</Link></li>
          </ul>
        </div>
        <div className="footer-contact-col">
          <h3>Headquarters</h3>
          <p className="footer-address">
            Ketu Design Studio,<br />
            VATIKA BUSINESS PARK,<br />
            Badshahpur Sohna Rd, Block W,<br />
            Sector 49, Gurugram, Haryana 122018
          </p>
          <p className="footer-phone">
            <strong>Phone:</strong> <a href="tel:+918398801801">+91 83988 01801</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Ketu Design Studio. Smart Designs | Seamless Execution. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/contact">Contact Form</Link>
          <span className="bullet">&bull;</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
