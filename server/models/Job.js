const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Rejected', 'Offer', 'Accepted'],
    default: 'Applied',
  },
  appliedDate: { type: Date, required: true },
  followUpDate: { type: Date },
  notes: { type: String },
});

module.exports = mongoose.model('Job', JobSchema);
