// src/components/Issues.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssueItem from './IssueItem';
import IssueForm from './IssueForm';
import SearchBar from './SearchBar';
import StatusUpdateForm from './StatusUpdateForm';
import '../styles.css';

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [updateStatus, setUpdateStatus] = useState({ id: '', status: '' });

  useEffect(() => {
    axios.get('https://backend-kf4i.onrender.com')
      .then(response => {
        setIssues(response.data);
        setFilteredIssues(response.data);
      })
      .catch(error => console.error('Error al obtener problemas:', error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    const filtered = issues.filter(issue =>
      issue.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredIssues(filtered);
  };

  const handleSubmit = (newIssue) => {
    // Asigna "NUEVO" por defecto si no se proporciona
    const issueWithStatus = { ...newIssue, status: "NUEVO" };
    axios.post('https://backend-kf4i.onrender.com', issueWithStatus)
      .then(response => {
        setIssues([...issues, response.data]);
        setFilteredIssues([...filteredIssues, response.data]);
      })
      .catch(error => console.error('Error al crear problema:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`https://backend-kf4i.onrender.com/${id}`)
      .then(() => {
        setIssues(issues.filter(issue => issue._id !== id));
        setFilteredIssues(filteredIssues.filter(issue => issue._id !== id));
      })
      .catch(error => console.error('Error al eliminar problema:', error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    axios.put(`https://backend-kf4i.onrender.com/${updateStatus.id}`, {
      status: updateStatus.status,
      updatedAt: currentDate,
    })
      .then(response => {
        const updated = issues.map(issue =>
          issue._id === updateStatus.id ? { ...issue, status: updateStatus.status, updatedAt: currentDate } : issue
        );
        setIssues(updated);
        setFilteredIssues(updated);
        setUpdateStatus({ id: '', status: '' });
      })
      .catch(error => console.error('Error al actualizar problema:', error));
  };

  const getStatusClass = (status) => {
    switch (status.toUpperCase()) {
      case 'NUEVO':
        return 'status-new';
      case 'EN PROGRESO':
        return 'status-in-progress';
      case 'RESUELTO':
        return 'status-resolved';
      case 'CERRADO':
        return 'status-closed';
      default:
        return 'status-new';
    }
  };

  return (
    <div>
      <IssueForm onSubmit={handleSubmit} />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      <StatusUpdateForm
        filteredIssues={filteredIssues}
        updateStatus={updateStatus}
        onStatusChange={setUpdateStatus}
        onSubmit={handleUpdate}
      />

      {/* Tabla de Problemas */}
      <table className="issue-table">
        <thead>
          <tr className="issue-list-header">
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
            <th>Fecha Actualización</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map(issue => (
            <IssueItem
              key={issue._id}
              issue={issue}
              onDelete={handleDelete}
              getStatusClass={getStatusClass}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Issues;
