import Link from 'next/link'

export const metadata = { title: 'Studio Insights & Trends | Ketu Design Studio' }

const articles = [
  { date: 'May 15, 2026', title: 'Spatial Design & Executive ROI', body: 'Physical office planning directly governs human output. This editorial breaks down data-driven research proving how custom spatial routing, high-efficiency task lighting, and sound isolation dampening can accelerate core department output by up to 30%.', author: 'By Sanjay Mittal, CEO' },
  { date: 'April 28, 2026', title: 'The Biophilic Design Revolution', body: 'Adding moss surfaces, natural light diffusers, and water features into high-volume corporate structures does more than decorate—it lowers workforce heart-rate indicators and drives concentration in high-stress focus cells.', author: 'By Geetika Sharma, Design Director' },
  { date: 'March 12, 2026', title: 'Beyond the Open Layout', body: 'While open planning boosts initial visual communication, it can severely degrade private focus. This research paper outlines custom modular soundproof pods and glassmorphic quiet cells to give your firm the ultimate balance of privacy and synergy.', author: 'By Ketu Spatial Lab' },
  { date: 'May 20, 2026', title: 'Designing Spaces for Content & Digital Strategy', body: 'In the digital age, a workspace must double as a media studio. Discover how integrating acoustic-optimized pods and dynamic lighting zones can empower your team to produce high-ranking video content and drive enterprise SEO.', author: 'By Riya Singh, Digital Strategist' },
  { date: 'May 24, 2026', title: 'Office Aesthetics & Organic Brand Authority', body: "A striking corporate interior isn't just for employees—it's a PR engine. Learn how investing in premium glassmorphism and luxury finishes can generate viral social media moments, press coverage, and high-quality backlinks.", author: 'By Ketu PR Team' },
  { date: 'May 26, 2026', title: 'The Architectural Impact on Local SEO', body: 'Your physical headquarters plays a massive role in localized search algorithms. This deep dive explains how strategic storefront design, visible branding, and community-integrated spaces can dramatically increase your Google Business Profile rankings.', author: 'By Jatin Sharma, CEO' },
]

export default function Insights() {
  return (
    <>
      <header className="page-banner">
        <div className="page-banner-content">
          <span className="badge badge-light">STUDIO INTEL</span>
          <h1>Design Philosophy &amp; Workspace Trends</h1>
          <p>Exploring the intersections of high-end corporate architecture, biophilic design, and data-driven workforce optimization.</p>
        </div>
      </header>

      <section className="page-section">
        <div className="page-container-large">
          <div className="section-header" style={{paddingTop:0, marginBottom:'2rem'}}>
            <span className="badge">EDITORIAL COLUMN</span>
            <h2>Research &amp; Spatial Philosophy</h2>
            <div className="divider"></div>
          </div>
          <div className="insights-grid">
            {articles.map(a => (
              <div className="insight-card" key={a.title}>
                <div className="insight-card-header">
                  <span className="insight-date">{a.date}</span>
                  <h3>{a.title}</h3>
                </div>
                <div className="insight-card-body">
                  <p>{a.body}</p>
                  <span className="insight-author">{a.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews" style={{backgroundColor:'var(--light-bg)', borderTop:'1px solid var(--dark-border)'}}>
        <div className="section-header" style={{paddingTop:0}}>
          <span className="badge">VOICES OF SUCCESS</span>
          <h2>Words From Our Clients</h2>
          <p className="section-subtitle">Real outcomes from our luxury workspace transformation projects across the country.</p>
          <div className="divider"></div>
        </div>
        <div className="reviews-container">
          <div className="quote-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="quote-text">&ldquo;Ketu didn&apos;t just build an office; they built a stage for our best work.&rdquo;</p>
            <div className="quote-author-info">
              <div className="author-avatar">JS</div>
              <div>
                <h4 className="author-name">Jatin Sharma</h4>
                <p className="author-title">Chief Infrastructure Officer, Tata Motors</p>
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
                <p className="author-title">Director, Reebok</p>
              </div>
            </div>
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
