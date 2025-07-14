import React, { useState, useEffect } from 'react';
import StatusDropdown from './StatusDropdown';

const initialState = {
  company: '',
  role: '',
  location: '',
  status: 'Applied',
  appliedDate: '',
  followUpDate: '',
  notes: '',
};

const JobForm = ({ onSubmit, editingJob, onCancel }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingJob) {
      setForm({
        ...editingJob,
        appliedDate: editingJob.appliedDate ? editingJob.appliedDate.slice(0, 10) : '',
        followUpDate: editingJob.followUpDate ? editingJob.followUpDate.slice(0, 10) : '',
      });
    } else {
      setForm(initialState);
    }
  }, [editingJob]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <form className="bg-white p-6 rounded shadow mb-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input name="company" value={form.company} onChange={handleChange} required placeholder="Company Name" className="input input-bordered w-full" />
        <input name="role" value={form.role} onChange={handleChange} required placeholder="Role" className="input input-bordered w-full" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="input input-bordered w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatusDropdown value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} />
        <input type="date" name="appliedDate" value={form.appliedDate} onChange={handleChange} required className="input input-bordered w-full" />
        <input type="date" name="followUpDate" value={form.followUpDate} onChange={handleChange} className="input input-bordered w-full" />
      </div>
      <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" className="textarea textarea-bordered w-full mb-4" />
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">{editingJob ? 'Update' : 'Add'} Job</button>
        {editingJob && <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default JobForm; 