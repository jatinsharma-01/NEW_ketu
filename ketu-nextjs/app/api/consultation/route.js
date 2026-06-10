import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Try MongoDB, fallback to JSON file
let mongoose = null
let ConsultationModel = null

async function getMongoModel() {
  if (ConsultationModel) return ConsultationModel
  try {
    mongoose = require('mongoose')
    const uri = process.env.MONGODB_URI
    if (!uri) throw new Error('No MONGODB_URI')
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 3000 })
    }
    const schema = new mongoose.Schema({
      name: String, org: String, email: String,
      phone: String, size: String, message: String,
      createdAt: { type: Date, default: Date.now }
    })
    ConsultationModel = mongoose.models.Consultation || mongoose.model('Consultation', schema)
    return ConsultationModel
  } catch {
    return null
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, org, email, phone, size, message } = body

    if (!name || !org || !email || !phone || !size || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 })
    }

    const data = { name, org, email, phone, size, message }

    // Try MongoDB first
    const Model = await getMongoModel()
    if (Model) {
      const doc = new Model(data)
      await doc.save()
      return NextResponse.json({ success: true, data: doc }, { status: 201 })
    }

    // Fallback: JSON file
    const filePath = path.join(process.cwd(), 'submissions.json')
    let submissions = []
    if (fs.existsSync(filePath)) {
      try { submissions = JSON.parse(fs.readFileSync(filePath, 'utf8')) } catch { submissions = [] }
    }
    const entry = { ...data, createdAt: new Date().toISOString() }
    submissions.push(entry)
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))
    return NextResponse.json({ success: true, data: entry }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
