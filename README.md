# 🎯 Job Application Tracker

A web-based application to help job seekers efficiently manage their job applications, track progress, and set follow-up reminders. The goal is to ensure you never miss a follow-up or lose track of an opportunity again.

---

## 📌 Features

### ✅ MVP (Minimum Viable Product)
- 🔍 **Add Job Applications**
  - Company Name, Role, Location, Status
- 📝 **Update Application Status**
  - Options: Applied, Interview, Offer, Rejected, etc.
- 📅 **Set Follow-Up Reminders**
  - Reminder for checking back or sending a follow-up email
- 🗃️ **Notes Section**
  - Add custom notes or details like referral info, resume version used
- 📋 **Simple Dashboard**
  - View and filter all your applications at a glance

---

## 🚀 Future Enhancements (Learning Milestones)

These are additional features you can build as you learn new technologies or concepts:

### 🔔 Notification System
- Email or in-app notifications for follow-up reminders

### 📬 Gmail Integration
- Automatically send follow-up emails via Gmail API
- Track emails sent directly from the app

### 📊 Analytics Dashboard
- Applications sent, success rate, most applied industries
- Visual charts using Chart.js or D3.js

### 📆 Calendar View
- See reminders and deadlines on a calendar

### 🗂️ Resume Tracker
- Upload and track which resume version was sent where

### 🔗 Chrome Extension (Advanced)
- Quick-add jobs from LinkedIn, Indeed, etc.

### 🔐 Authentication & User Accounts
- Sign up/login with email or OAuth (Google)
- Sync applications across devices

### 📱 Mobile App (React Native or Flutter)
- Take the tracker on the go

### 🌐 Job Board Scraping (Advanced)
- Auto-add job openings from chosen websites

---

## 🛠️ Tech Stack (Suggested)

| Frontend | Backend | Database | Others |
|----------|---------|----------|--------|
| React.js | Node.js / Express | MongoDB / Firebase | Nodemailer, cron jobs |
| Tailwind / Bootstrap | Django (optional) | PostgreSQL (optional) | Chart.js, OAuth, etc. |

> You can start simple (e.g., just React + localStorage) and upgrade as you learn.

---

## ⚙️ Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/job-application-tracker.git
cd job-application-tracker

# Install dependencies
npm install

# Start development server
npm run dev
