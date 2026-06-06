const express = require('express');
const cors    = require('cors');
const path    = require('path');
const { saveConsultation } = require('./models/consultationModel');

const app = express();

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Serve all static frontend files (HTML, CSS, JS, images) from the project root
app.use(express.static(path.join(__dirname, '..')));

// ── API Routes ────────────────────────────────────────────────────────────────

/**
 * POST /api/consultation
 * Accepts a consultation form submission and stores it.
 */
app.post('/api/consultation', async (req, res) => {
  const { name, org, email, phone, size, message } = req.body;

  // Basic validation
  if (!name || !org || !email || !phone || !size || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    const saved = await saveConsultation({ name, org, email, phone, size, message });
    return res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error('Error saving consultation:', err);
    return res.status(500).json({ success: false, error: 'Failed to save submission.' });
  }
});

// ── Catch-all: serve index.html for any non-API route ─────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = app;
