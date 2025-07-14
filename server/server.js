const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Job = require('./models/Job');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/jobs', require('./routes/jobs'));

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Daily at 8am, check for follow-up reminders
cron.schedule('0 8 * * *', async () => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const jobs = await Job.find({ followUpDate: { $eq: today } });
    for (const job of jobs) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // For demo, send to self
        subject: `Follow-up Reminder: ${job.company} - ${job.role}`,
        text: `Reminder to follow up on your application for ${job.role} at ${job.company}.\n\nNotes: ${job.notes || 'None'}\nLocation: ${job.location || 'N/A'}\nApplied: ${job.appliedDate ? job.appliedDate.toISOString().slice(0,10) : ''}`,
      });
    }
    if (jobs.length > 0) {
      console.log(`Sent ${jobs.length} follow-up reminder email(s).`);
    }
  } catch (err) {
    console.error('Error sending follow-up reminders:', err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));