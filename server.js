require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');
const model = require('./src/models/consultationModel');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ketu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 2000 // fail fast if local mongo offline
})
.then(() => {
  console.log('MongoDB connected successfully.');
  // Initialize the storage model with active MongoDB configuration
  const ConsultationModel = mongoose.model('Consultation', model.ConsultationSchema);
  model.setStorageMode(true, ConsultationModel);
})
.catch(err => {
  console.warn('MongoDB connection failed. Falling back to local JSON database.');
  console.warn(`Reason: ${err.message}`);
  // Set storage engine mode to local JSON file
  model.setStorageMode(false, null);
});

// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message
  });
});