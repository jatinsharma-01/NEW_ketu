'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function WhyUs() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.2 })
    cardsRef.current.forEach(c => c && observer.observe(c))
    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      title: '3-Year Warranty Assurance',
      desc: 'Enjoy peace of mind with long-term reliability on materials & workmanship.'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>,
      title: 'Transparent Process',
      desc: 'From planning to handover you get clear communication, no surprises, and complete clarity.'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
      title: 'Premium Quality & Finishing',
      desc: 'Modern materials, neat finishing, and durable craftsmanship in every project.'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      title: 'On-Time Project Completion',
      desc: 'We follow a structured timeline so your office is delivered exactly when promised.'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
      title: 'Smart Space Utilization',
      desc: 'Maximize every square foot with intelligent layouts designed for workflow and efficiency.'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
      title: 'Tailored Office Solutions',
      desc: 'Every space is planned & executed to match your brand, workflow, and functional needs.'
    },
  ]

  return (
    <>
      <section className="hero" style={{backgroundImage:"url('/images/interior_02.jpg')"}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-glass-card">
            <span className="badge badge-light">WHY US</span>
            <h1 className="hero-title">Why Choose Ketu Design Studio?</h1>
            <p className="hero-subtitle">Our commitment to excellence, premium quality, and end‑to‑end execution makes us the partner of choice for elite corporate interiors.</p>
          </div>
        </div>
      </section>

      <section className="page-section" id="why-us-details">
        <div className="page-container-large">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2.5rem', marginTop:'4rem'}}>
            {cards.map((c, i) => (
              <div
                key={c.title}
                ref={el => cardsRef.current[i] = el}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '3rem 2rem',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.1 + 0.1}s`,
                  border: '1px solid rgba(15,23,42,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="why-us-card"
              >
                <div style={{width:70, height:70, background:'rgba(37,99,235,0.05)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.5rem', color:'#2563EB'}}>
                  {c.icon}
                </div>
                <h3 style={{fontFamily:'var(--font-serif)', fontSize:'1.4rem', marginBottom:'1rem', color:'var(--premium-blue-dark)'}}>{c.title}</h3>
                <p style={{fontSize:'0.95rem', color:'#64748B', lineHeight:1.6}}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Elevate Your Workspace?</h2>
          <p>Connect with our elite design partners for a complimentary consultation.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-outlined">CONTACT US</Link>
          </div>
        </div>
      </section>
    </>
  )
}
