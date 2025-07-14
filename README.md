# FollowUpPro
A full-stack web app to track your job applications, built with React.js, Node.js, Express, and MongoDB.

## Features
- Add, edit, and delete job applications
- Track status: Applied, Interview, Rejected, Offer, Accepted
- Set follow-up reminders
- Add personal notes
- Dashboard with table view and filtering

## Folder Structure
```
job-application-tracker/
  client/    # React frontend
  server/    # Express backend
```

## Backend Setup (Express + MongoDB)
1. `cd server`
2. Copy `.env.example` to `.env` and set your MongoDB URI
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm run dev
   # or
   npm start
   ```
5. The backend runs on `http://localhost:5000`

## Frontend Setup (React + Tailwind)
1. `cd client`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
4. The frontend runs on `http://localhost:3000`

## Usage
- Add new jobs using the form
- Edit or delete jobs from the dashboard
- Filter jobs by status or application date

## API Endpoints
- `POST   /api/jobs`    Add new job
- `GET    /api/jobs`    Fetch all jobs
- `PUT    /api/jobs/:id` Update job
- `DELETE /api/jobs/:id` Delete job

---

**Happy job hunting!** 
=======
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
git clone https://github.com/siddharth04062003/FollowUpPro.git
cd job-application-tracker

# Install dependencies
npm install

# Start development server
npm run dev

