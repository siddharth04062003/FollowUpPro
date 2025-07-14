import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from '../components/JobForm';
import FilterBar from '../components/FilterBar';
import JobTable from '../components/JobTable';

const API_URL = 'http://localhost:5000/api/jobs';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState({ status: '', date: '' });
  const [editingJob, setEditingJob] = useState(null);

  const fetchJobs = async () => {
    const res = await axios.get(API_URL);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddOrEdit = async (jobData) => {
    if (editingJob) {
      await axios.put(`${API_URL}/${editingJob._id}`, jobData);
      setEditingJob(null);
    } else {
      await axios.post(API_URL, jobData);
    }
    fetchJobs();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchJobs();
  };

  const handleEditClick = (job) => {
    setEditingJob(job);
  };

  const filteredJobs = jobs.filter(job => {
    let statusMatch = filter.status ? job.status === filter.status : true;
    let dateMatch = filter.date ? job.appliedDate && job.appliedDate.startsWith(filter.date) : true;
    return statusMatch && dateMatch;
  });

  return (
    <div className="container mx-auto py-8 px-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Application Tracker</h1>
      <JobForm onSubmit={handleAddOrEdit} editingJob={editingJob} onCancel={() => setEditingJob(null)} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <JobTable jobs={filteredJobs} onDelete={handleDelete} onEdit={handleEditClick} />
    </div>
  );
};

export default Dashboard; 