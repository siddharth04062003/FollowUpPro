# Job Application Tracker

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