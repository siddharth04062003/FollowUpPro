const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Job = require('./models/Job');
const User = require('./models/User');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

cron.schedule('0 8 * * *', async () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0,0,0,0);

  const jobs = await Job.find({ followUpDate: tomorrow }).populate('user');
  for (const job of jobs) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: job.user.email,
      subject: 'Job Application Follow-Up Reminder',
      html: `<p>Hi ${job.user.name},<br>
        Reminder to follow up on your application for <b>${job.company}</b> (${job.role}) on ${job.followUpDate.toDateString()}.
        </p>`
    });
  }
});
