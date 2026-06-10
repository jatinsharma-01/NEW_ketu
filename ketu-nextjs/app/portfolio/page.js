import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Elite Workspace Portfolio | Ketu Design Studio' }

const projects = [
  {
    tag: 'Corporate Headquarters', title: 'Tech Mahindra Innovation Suite',
    desc: "\"Ketu didn't just build an office; they built a stage for our best work.\" Our primary objective was to replace cellular cubicle systems with dynamic, highly agile collaborative zones designed to maximize cross-department synergy and employee engagement.",
    stats: [{ v: '45,000 sq ft', l: 'Spatial Footprint' }, { v: 'Gurugram, HR', l: 'Location' }, { v: '400+ Employees', l: 'Optimized Synergy' }, { v: 'Acoustic Glass', l: 'Key Material Spec' }],
    img: '/images/project_tech_mahindra.png', alt: 'Tech Mahindra Innovation Suite'
  },
  {
    tag: 'Executive C-Suite', title: "Reebok 'I Made It' Executive Wing",
    desc: 'An elite corporate suite designed to express corporate power, modern luxury, and design excellence. Features sustainable walnut panels, custom leather boardroom seats, and intelligent ambient lighting adjustments.',
    stats: [{ v: '12,500 sq ft', l: 'Spatial Footprint' }, { v: 'New Delhi, DL', l: 'Location' }, { v: 'Premium Walnut', l: 'Material Cladding' }, { v: 'Smart Lighting', l: 'Automation System' }],
    img: '/images/project_reebok.png', alt: 'Reebok Executive Suite'
  },
  {
    tag: 'Corporate Lounge & Dining', title: 'Haldiram Premium Amenity Lounge',
    desc: 'A beautiful wellness café, reception hub, and private discussion zone designed to make deep impressions on incoming VIP clients. Merges high-end glassmorphism partitions with living plant walls.',
    stats: [{ v: '18,000 sq ft', l: 'Spatial Footprint' }, { v: 'Noida, UP', l: 'Location' }, { v: 'Living Green Wall', l: 'Acoustic Dampening' }, { v: '5-Star Cafeteria', l: 'Employee Amenity' }],
    img: '/images/second.png', alt: 'Haldiram Premium Lounge'
  },
  {
    tag: 'Automotive Corporate Office', title: 'Tata Motors Corporate Hub',
    desc: 'A dynamic, high-tech command center and data-driven workspace engineered to promote innovation. Features modern slate flooring, polished steel textures, and high-efficiency workflow routing.',
    stats: [{ v: '60,000 sq ft', l: 'Spatial Footprint' }, { v: 'Pune, MH', l: 'Location' }, { v: 'Polished Slate', l: 'Flooring Spec' }, { v: '500+ Nodes', l: 'Data Infrastructure' }],
    img: '/images/first.png', alt: 'Tata Motors Corporate Hub'
  },
]

const galleryA = Array.from({length: 9}, (_, i) => `/images/a${i + 1}.jpeg`)
const galleryB = Array.from({length: 9}, (_, i) => `/images/b${i + 1}.jpeg`)

export default function Portfolio() {
  return (
    <>
      <header className="page-banner">
        <div className="page-banner-content">
          <span className="badge badge-light">ARCHITECTURAL SHOWCASE</span>
          <h1>Workspaces Built For High-Performing Teams</h1>
          <p>A curated retrospective of our luxury spatial design and turnkey office transformation projects across the country.</p>
        </div>
      </header>

      <section className="page-section">
        <div className="page-container-large">
          {projects.map((p, i) => (
            <div className={`project-showcase-block${i === 0 ? ' slide-in-left' : ''}`} key={p.title}>
              <div className="project-info-side">
                <span className="project-tag">{p.tag}</span>
                <h2>{p.title}</h2>
                <p className="project-description">{p.desc}</p>
                <div className="project-stats-grid">
                  {p.stats.map(s => (
                    <div className="project-stat-pill" key={s.l}>
                      <h4>{s.v}</h4>
                      <p>{s.l}</p>
                    </div>
                  ))}
                </div>
                <a href="tel:+918398801801" className="btn btn-filled">CONTACT FOR DETAILS</a>
              </div>
              <div className="project-media-side">
                <Image src={p.img} alt={p.alt} width={600} height={400} className="project-image" style={{width:'88%', height:'auto', margin:'0 auto', display:'block'}} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="page-container-large">
          <h2 style={{textAlign:'center', marginBottom:'2rem'}}>Snapshots of our other projects</h2>
          <div className="services-grid" style={{marginBottom:'2.5rem'}}>
            {galleryA.map((src, i) => (
              <Image key={i} src={src} alt={`Project ${i + 1}`} width={400} height={300} className="service-img" style={{width:'100%', height:'220px', objectFit:'cover'}} />
            ))}
          </div>
          <div className="services-grid">
            {galleryB.map((src, i) => (
              <Image key={i} src={src} alt={`Project ${i + 10}`} width={400} height={300} className="service-img" style={{width:'100%', height:'220px', objectFit:'cover'}} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Corporate Workspace?</h2>
          <p>Connect with our expert design partners to draft your space roadmap and discover design that drives ROI.</p>
          <div className="cta-buttons">
            <a href="tel:+918398801801" className="btn btn-filled">CONTACT US</a>
            <Link href="/services" className="btn btn-outlined">VIEW OUR SERVICES</Link>
          </div>
        </div>
      </section>
    </>
  )
}
