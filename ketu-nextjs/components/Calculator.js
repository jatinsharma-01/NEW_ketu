'use client'
import { useState } from 'react'

export default function Calculator() {
  const [area, setArea] = useState(5000)
  const [quality, setQuality] = useState(2500)
  const [addons, setAddons] = useState({ iot: false, bio: false, acoustic: false })

  const addonRates = { iot: 250, bio: 150, acoustic: 300 }
  const addonTotal = Object.entries(addons).reduce((sum, [k, v]) => sum + (v ? addonRates[k] : 0), 0)
  const total = area * (quality + addonTotal)

  const fmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })

  return (
    <div className="calculator-container advanced-calc">
      <div className="calc-top-row">
        <div className="calc-section">
          <div className="calc-section-header">
            <h3>1. Workspace Size</h3>
            <div className="area-input-wrapper">
              <input type="number" value={area} min={500} max={50000} onChange={e => setArea(Number(e.target.value))} />
              <span>sq ft</span>
            </div>
          </div>
          <input type="range" min={500} max={50000} step={500} value={area} onChange={e => setArea(Number(e.target.value))} className="styled-slider" />
        </div>
      </div>
      <div className="calc-section">
        <h3>2. Finish &amp; Aesthetics Level</h3>
        <div className="quality-cards">
          {[
            {v:1800, label:'Standard Corporate', price:'₹1,800/sqft', desc:'Functional & Clean'},
            {v:2500, label:'Affordable Luxury', price:'₹2,500/sqft', desc:'Glassmorphism & Premium'},
            {v:3500, label:'Ultra Premium', price:'₹3,500/sqft', desc:'Bespoke Executive Design'}
          ].map(q => (
            <label key={q.v} className={`quality-card${quality === q.v ? ' active' : ''}`}>
              <input type="radio" name="calc-quality" value={q.v} checked={quality === q.v} onChange={() => setQuality(q.v)} />
              <div className="card-content">
                <h4>{q.label}</h4>
                <p>{q.price}</p>
                <span>{q.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="calc-section">
        <h3>3. Optional Premium Enhancements</h3>
        <div className="addons-grid">
          {[
            {k:'iot', label:'Smart IoT Lighting', rate:'+₹250/sqft'},
            {k:'bio', label:'Biophilic Design', rate:'+₹150/sqft'},
            {k:'acoustic', label:'Acoustic Privacy Pods', rate:'+₹300/sqft'}
          ].map(a => (
            <label key={a.k} className="addon-toggle">
              <div className="addon-info">
                <h4>{a.label}</h4>
                <span>{a.rate}</span>
              </div>
              <input type="checkbox" className="calc-addon" checked={addons[a.k]} onChange={e => setAddons({...addons, [a.k]: e.target.checked})} />
              <span className="toggle-switch"></span>
            </label>
          ))}
        </div>
      </div>
      <div className="calc-result-panel">
        <h3>Estimated Investment</h3>
        <div className="calc-amount">{fmt.format(total)}</div>
        <p className="calc-disclaimer">*This is a preliminary algorithm estimate. Final quotation depends on civil constraints, HVAC routing, and customized glassmorphism implementations.</p>
      </div>
    </div>
  )
}
