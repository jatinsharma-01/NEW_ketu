'use client'
import { useState } from 'react'

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', size: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (msg, type) => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 6000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        showToast('Success! Your brief has been drafted. A Ketu strategist will contact you within 4 hours.', 'success')
        setForm({ name: '', org: '', email: '', phone: '', size: '', message: '' })
      } else {
        showToast(data.error || 'Failed to submit. Please try again.', 'error')
      }
    } catch {
      showToast('Network error: Unable to connect to the Ketu server.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {toast && (
        <div style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999,
          background: '#1E293B', color: '#fff', padding: '1.2rem 1.6rem',
          borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          borderLeft: toast.type === 'success' ? '4px solid #10B981' : '4px solid #EF4444',
          maxWidth: '380px', fontSize: '0.9rem', lineHeight: '1.45',
          fontFamily: 'Inter, sans-serif'
        }}>
          {toast.msg}
        </div>
      )}
      <form id="consultation-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Sanjay Mittal" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="org">Organization</label>
            <input type="text" id="org" placeholder="Tech Mahindra" required value={form.org} onChange={e => setForm({...form, org: e.target.value})} />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="email">Corporate Email</label>
            <input type="email" id="email" placeholder="ceo@company.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Direct Number</label>
            <input type="tel" id="phone" placeholder="+91 99999 99999" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="size">Workspace Footprint</label>
          <select id="size" required value={form.size} onChange={e => setForm({...form, size: e.target.value})}>
            <option value="" disabled>Select Spatial Area Size</option>
            <option value="small">Under 5,000 sq ft</option>
            <option value="medium">5,000 - 15,000 sq ft</option>
            <option value="large">15,000 - 30,000 sq ft</option>
            <option value="enterprise">30,000+ sq ft (Enterprise HQ)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Design Parameters &amp; Timelines</label>
          <textarea id="message" placeholder="Describe the corporate floor layouts..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'PROCESSING BRIEF...' : 'REQUEST EXECUTIVE BRIEF →'}
        </button>
      </form>
    </>
  )
}
