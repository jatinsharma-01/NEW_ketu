import ConsultationForm from '@/components/ConsultationForm'
import Calculator from '@/components/Calculator'

export const metadata = { title: 'Schedule a Workspace Audit | Ketu Design Studio' }

export default function Contact() {
  return (
    <>
      <header className="page-banner">
        <div className="page-banner-content">
          <span className="badge badge-light">IMMEDIATE CONNECT</span>
          <h1>Design Spatial Roadmaps That Drive Corporate Growth</h1>
          <p>Connect directly with our elite spatial strategist partners to audit your workflow layout and initiate design execution.</p>
        </div>
      </header>

      <section className="page-section" style={{backgroundColor:'var(--light-bg)', borderBottom:'1px solid var(--dark-border)'}}>
        <div className="page-container-large">
          <div className="section-header" style={{paddingTop:0}}>
            <span className="badge">AFFORDABLE LUXURY</span>
            <h2>Quick Investment Estimator</h2>
            <p className="section-subtitle">Get an instant, data-driven estimate for your premium corporate fit-out before you even book a call.</p>
            <div className="divider"></div>
          </div>
          <Calculator />
        </div>
      </section>

      <section className="page-section">
        <div className="page-container-large">
          <div className="contact-hub-row">
            <div className="contact-coordinates-side">
              <span className="badge">DIRECT CO-ORDINATES</span>
              <h2 style={{marginTop:'0.5rem'}}>Let&apos;s Talk Workspace Numbers</h2>
              <p className="contact-intro">Whether you want to audit workflow friction in an existing Gurugram floor, fit-out an elite C-Suite executive lounge, or schedule direct procurement logistics, our corporate design partners are ready to assist.</p>
              <a href="tel:+918375801801" className="contact-card-link">
                <span className="contact-card-label">Primary Hotline</span>
                <span className="contact-card-value">+91 83758 01801</span>
                <span className="contact-card-desc">Click to dial immediately and call our Gurugram executive desk.</span>
              </a>
              <a href="https://wa.me/918398801801" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                <span className="contact-card-label">Executive Chat Channel</span>
                <span className="contact-card-value">WhatsApp Chat</span>
                <span className="contact-card-desc">Message us directly for faster procurement queries and visual media shares.</span>
              </a>
              <div style={{backgroundColor:'var(--light-bg)', border:'1px solid var(--dark-border)', padding:'2.5rem', borderRadius:'16px'}}>
                <span className="contact-card-label">Headquarters</span>
                <h4 style={{fontFamily:'var(--font-serif)', fontSize:'1.4rem', color:'var(--premium-blue-dark)', marginBottom:'0.75rem'}}>Ketu Design Studio</h4>
                <p style={{fontSize:'0.9rem', color:'#475569', lineHeight:1.7}}>1st floor, Orchid Business Park,<br/>Sector 48, Gurugram, Haryana 122018</p>
              </div>
            </div>
            <div className="contact-form-side">
              <h3>Draft Your Space Brief</h3>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
