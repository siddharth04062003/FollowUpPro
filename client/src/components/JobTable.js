import React from 'react';

const JobTable = ({ jobs, onDelete, onEdit }) => (
  <div className="overflow-x-auto">
    <table className="table w-full bg-white rounded shadow">
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Location</th>
          <th>Status</th>
          <th>Applied</th>
          <th>Follow Up</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.length === 0 ? (
          <tr>
            <td colSpan="8" className="text-center py-4">No jobs found.</td>
          </tr>
        ) : (
          jobs.map(job => (
            <tr key={job._id}>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td>{job.location}</td>
              <td>{job.status}</td>
              <td>{job.appliedDate ? job.appliedDate.slice(0, 10) : ''}</td>
              <td>{job.followUpDate ? job.followUpDate.slice(0, 10) : ''}</td>
              <td>{job.notes}</td>
              <td>
                <button className="btn btn-xs btn-primary mr-2" onClick={() => onEdit(job)}>Edit</button>
                <button className="btn btn-xs btn-error" onClick={() => onDelete(job._id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default JobTable; 