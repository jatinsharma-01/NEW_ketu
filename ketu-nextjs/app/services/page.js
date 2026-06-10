import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Premium Workspace Solutions | Ketu Design Studio' }

const serviceItems = [
  {
    id: 'strategy', phase: 'PHASE 01', title: 'Corporate Space Strategy & Feasibility',
    img: '/images/interior_02.jpg', subtitle: 'Pre-Design Optimization',
    desc: 'We conduct deep workspace audits and interview executive teams to map organizational flow, department friction, and employee dynamics. By reviewing layout synergy, we optimize spatial blueprints to maximize cross-department collaboration and floor productivity.',
    checklist: ['Friction Diagnostics', 'Workforce Flow Mapping', 'Department Synergy Blueprints', 'Spatial Efficiency Audits'],
    cta: 'CALL OUR STRATEGIST'
  },
  {
    id: 'architecture', phase: 'PHASE 02', title: 'Bespoke Office Architecture & Fit-outs',
    img: '/images/interior_03.jpg', subtitle: 'High-End Interior Construction',
    desc: 'We design elegant workspace structures that make powerful brand statements. Features premium timber panelling, soundproof double-glazed acoustic partitions, customized task desks, and glassmorphism wall separations to maximize natural light distribution.',
    checklist: ['Glassmorphic Partitions', 'Premium Timber Cladding', 'Acoustic Ceiling Panels', 'Custom Spatial Framing'],
    cta: 'CALL OUR ARCHITECT'
  },
  {
    id: 'suites', phase: 'PHASE 03', title: 'Executive & C-Suite Interior Styling',
    img: '/images/interior_04.jpg', subtitle: 'Elite Executive Styling',
    desc: 'Specialized designs for C-Suite boardrooms, VIP private suites, and executive wings. We incorporate sustainable Italian slate, premium leather furniture, smart dimmable uplighting systems, and advanced conferencing nodes.',
    checklist: ['Italian Slate Tables', 'Premium Leather Seating', 'Ambient Smart Uplighting', 'Conferencing Integration'],
    cta: 'CALL OUR SUITE STYLIST'
  },
  {
    id: 'amenities', phase: 'PHASE 04', title: 'Luxury Amenity & Collaborative Zones',
    img: '/images/interior_05.jpg', subtitle: 'Biophilic Relaxation & Synergy Zones',
    desc: 'High-end cafeterias, wellness zones, focus pods, and biophilic lobby hubs. Designed to optimize visual calm and recharge teams. We source living green walls, natural light diffusers, and soft-fabric acoustic pods.',
    checklist: ['Living Moss Walls', 'Wellness Focus Pods', 'Luxury Dining Hubs', 'Natural Light Diffusers'],
    cta: 'CALL OUR LOUNGE STYLIST'
  },
  {
    id: 'turnkey', phase: 'PHASE 05', title: 'Turnkey Project Execution & Management',
    img: '/images/first.png', subtitle: 'Flawless Sourcing & Assembly',
    desc: 'Complete direct project supervision from procurement, logistics, framing, and assembly with a single dedicated point of contact, ensuring strict project delivery schedules, flawless visual precision, and minimal workspace disruption.',
    checklist: ['Dedicated Account Manager', 'Flawless Procurement Logistics', 'Fast-Track Construction Cycles', 'Zero-Disruption Assembly'],
    cta: 'CALL OUR PROJECT DIRECTOR'
  },
]

const timeline = [
  { step: '01. Discovery Audit', desc: 'We review your corporate flow patterns, workspace friction, and structural feasibility to outline a strategy map for spatial optimization and employee synergy.' },
  { step: '02. Blueprints & Renders', desc: 'Our architects draw up optimized 2D layout routing plans and high-resolution 3D virtual spatial renderings so you can visualize the workspace before assembly.' },
  { step: '03. Premium Procurement', desc: 'We manage direct procurement, importing Italian marble, walnut timbers, smart lighting, and high-efficiency acoustic isolation panels directly from trusted partners.' },
  { step: '04. Supervised Handover', desc: 'Our supervised assembly crew executes construction cycles smoothly, delivering a flawless turnkey executive spatial setup ready to foster immediate corporate synergy.' },
]

export default function Services() {
  return (
    <>
      <header className="page-banner">
        <div className="page-banner-content">
          <span className="badge badge-light">EXPERT SOLUTIONS</span>
          <h1>Spatial Design Engineered For Corporate Authority</h1>
          <p>We transcend aesthetic decoration by combining spatial strategy, industrial psychology, and turnkey engineering to accelerate firm synergy.</p>
        </div>
      </header>

      <section className="page-section" id="solutions">
        <div className="page-container-large">
          {serviceItems.map(s => (
            <div className="service-details-row" id={s.id} key={s.id}>
              <div className="service-details-header">
                <span className="badge">{s.phase}</span>
                <h2>{s.title}</h2>
                <div className="divider" style={{margin:'1.5rem 0 0 0'}}></div>
              </div>
              <div className="service-details-body">
                <Image src={s.img} alt={s.title} width={700} height={300} className="service-img" style={{width:'100%', height:'220px', objectFit:'cover'}} />
                <h3>{s.subtitle}</h3>
                <p>{s.desc}</p>
                <ul className="service-checklist">
                  {s.checklist.map(c => <li key={c}>{c}</li>)}
                </ul>
                <a href="tel:+918398801801" className="btn btn-filled">{s.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" style={{backgroundColor:'var(--light-bg)', borderTop:'1px solid var(--dark-border)'}}>
        <div className="page-container-large">
          <div className="section-header" style={{paddingTop:0}}>
            <span className="badge">OUR METHODOLOGY</span>
            <h2>The Seamless Path to Elite Architecture</h2>
            <p className="section-subtitle">A highly optimized execution cycle from discovery to spatial handover.</p>
            <div className="divider"></div>
          </div>
          <div className="methodology-timeline">
            {timeline.map(t => (
              <div className="timeline-step" key={t.step}>
                <div className="timeline-dot"></div>
                <h3>{t.step}</h3>
                <p>{t.desc}</p>
              </div>
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
            <Link href="/portfolio" className="btn btn-outlined">VIEW PORTFOLIO</Link>
          </div>
        </div>
      </section>
    </>
  )
}
