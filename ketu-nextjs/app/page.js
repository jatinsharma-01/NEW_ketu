import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Workspaces That Deserve Their Own IMDB Page | Ketu Design Studio',
}

const partners = [
  { src: '/images/tech_mahindra_logo.jpg', alt: 'Tech Mahindra' },
  { src: '/images/haldiram_logo.jpg', alt: 'Haldiram' },
  { src: '/images/reebok_logo.jpg', alt: 'Reebok' },
  { src: '/images/tata_motors_logo.jpg', alt: 'Tata Motors' },
  { src: '/images/vodafone_logo.png', alt: 'Vodafone' },
  { src: '/images/make_my_trip_logo.png', alt: 'Make My Trip' },
  { src: '/images/blue_tokai_logo.png', alt: 'Blue Tokai' },
  { src: '/images/geetanjali_saalon_logo.png', alt: 'Geetanjali Saalon' },
]

const services = [
  { num: '01', img: '/images/interior_02.jpg', title: 'Corporate Space Strategy', desc: 'Pre-design space auditing, feasibility assessments, and data-driven flow strategy designed to optimize employee synergy and spatial efficiency.', href: '/services#strategy' },
  { num: '02', img: '/images/interior_03.jpg', title: 'Bespoke Office Architecture', desc: 'Premium, high-end interior architecture and custom fit-outs engineered to reflect the elite status and specific functional requirements of your firm.', href: '/services#architecture' },
  { num: '03', img: '/images/interior_04.jpg', title: 'Executive & C-Suite Designs', desc: 'Exclusive, private boardrooms, lounges, and private offices crafted to make powerful statements, inspire big decisions, and comfort elite minds.', href: '/services#suites' },
  { num: '04', img: '/images/interior_05.jpg', title: 'Luxury Amenity Zones', desc: 'High-end cafeteria lounges, wellness pods, dynamic discussion hubs, and reception entries designed to impress visitors and recharge teams.', href: '/services#amenities' },
  { num: '05', img: '/images/first.png', title: 'Turnkey Project Execution', desc: 'Complete project supervision from procurement to physical assembly with a single point of contact, ensuring flawless delivery on schedule.', href: '/services#turnkey' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-glass-card">
            <p className="hero-subtitle slide-in-left">Your Premier Destination for Bespoke Office Solutions.</p>
            <h1 className="hero-title slide-in-left">Elevating Workspaces with Unrivaled Design Excellence.</h1>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-filled">CONTACT US</Link>
              <Link href="/services" className="btn btn-outlined">OUR SERVICES</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats" id="stats">
        <div className="stats-container">
          {[
            {num:'+500', label:'Projects Accomplished'},
            {num:'+120', label:'Elite Clients'},
            {num:'+30', label:'Design Accolades'},
            {num:'99%', label:'Client Satisfaction'}
          ].map(s => (
            <div className="stat-box" key={s.label}>
              <h2>{s.num}</h2>
              <p>{s.label}</p>
              <div className="glass-shine"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="partners" id="partners">
        <div className="section-header">
          <span className="badge">COLLABORATORS</span>
          <h2>Trusted Partners</h2>
          <div className="divider"></div>
          <div className="partner-carousel-wrapper">
            <div className="partner-carousel">
              {[...partners, ...partners].map((p, i) => (
                <div className="partner-logo" key={i}>
                  <Image src={p.src} alt={p.alt} width={120} height={60} className="partner-logo-img" style={{objectFit:'contain', width:'auto', height:'60px'}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy" id="why-us">
        <div className="philosophy-container">
          <span className="badge badge-light">OUR PHILOSOPHY</span>
          <h2>Spaces That Inspire Businesses<br /><span className="accent-text">(And 5-Star Reviews)</span></h2>
          <p className="philosophy-text">
            We believe great spaces are born from a culture of creativity, collaboration, and relentless pursuit of excellence. Our team of visionary designers, seasoned architects, and meticulous craftsmen work hand‑in‑hand with clients to translate brand identity and business goals into immersive environments. From concept sketches to flawless execution, we obsess over material quality, sustainability, and user experience, delivering spaces that not only impress but also empower teams to perform at their best.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="section-header">
          <span className="badge">EXPERT SOLUTIONS</span>
          <h2>Our Specialized Services</h2>
          <p className="section-subtitle">Bespoke spatial design engineered to inspire growth, command authority, and foster innovation.</p>
          <div className="divider"></div>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.num}>
              <div className="card-num">{s.num}</div>
              <Image src={s.img} alt={s.title} width={400} height={220} className="service-img" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link href={s.href} className="card-link">Explore →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="reviews" id="insight">
        <div className="section-header">
          <span className="badge">TESTIMONIALS</span>
          <h2>Words From The C-Suite</h2>
          <p className="section-subtitle">Real outcomes from our luxury workspace transformation and bespoke office design projects across the country.</p>
          <div className="divider"></div>
        </div>
        <div className="reviews-container">
          <div className="quote-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="quote-text">&ldquo;Ketu didn&apos;t just build an office; they built a stage for our best work. 10/10 would definitely let them move the furniture again.&rdquo;</p>
            <div className="quote-author-info">
              <div className="author-avatar">SM</div>
              <div>
                <h4 className="author-name">Sanjay Mittal</h4>
                <p className="author-title">Global Workplace Design Lead, Tech Mahindra</p>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="quote-text">&ldquo;Finally, a workspace that looks as good as our quarterly projections. The &apos;I Made It&apos; Suite is a literal game changer.&rdquo;</p>
            <div className="quote-author-info">
              <div className="author-avatar">AK</div>
              <div>
                <h4 className="author-name">Ananya Kapoor</h4>
                <p className="author-title">Head of Corporate Infrastructure, Reebok</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Corporate Workspace?</h2>
          <p>Connect with our expert design partners to draft your space roadmap and discover design that drives ROI.</p>
          <div className="cta-buttons">
            <a href="tel:+918398801801" className="btn btn-filled">CONTACT US</a>
            <Link href="/whyus" className="btn btn-outlined">WHY US</Link>
          </div>
        </div>
      </section>
    </>
  )
}
