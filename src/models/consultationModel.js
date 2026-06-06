const fs = require('fs');
const path = require('path');

// Path to the local JSON fallback file
const SUBMISSIONS_FILE = path.join(__dirname, '../../submissions.json');

// Mongoose schema (used only when MongoDB is connected)
const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true },
  org:       { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true },
  phone:     { type: String, required: true, trim: true },
  size:      { type: String, required: true, enum: ['small', 'medium', 'large', 'enterprise'] },
  message:   { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

// Storage mode state
let useMongoDb = false;
let ConsultationModel = null;

/**
 * Called by server.js after the MongoDB connection attempt resolves.
 * @param {boolean} mongoActive - true if MongoDB connected successfully
 * @param {object}  model       - the Mongoose model instance (or null)
 */
function setStorageMode(mongoActive, model) {
  useMongoDb = mongoActive;
  ConsultationModel = model;
}

/**
 * Save a consultation submission.
 * Uses MongoDB when available, otherwise appends to submissions.json.
 */
async function saveConsultation(data) {
  if (useMongoDb && ConsultationModel) {
    const doc = new ConsultationModel(data);
    return await doc.save();
  }

  // --- JSON file fallback ---
  let submissions = [];
  if (fs.existsSync(SUBMISSIONS_FILE)) {
    try {
      submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'));
    } catch {
      submissions = [];
    }
  }

  const entry = { ...data, createdAt: new Date().toISOString() };
  submissions.push(entry);
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf8');
  return entry;
}

module.exports = { ConsultationSchema, setStorageMode, saveConsultation };
