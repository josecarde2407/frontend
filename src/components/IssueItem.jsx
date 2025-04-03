import React from 'react';

const IssueItem = ({ issue, onDelete, getStatusClass }) => {
  // Formatear la fecha antes de mostrarla
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <tr className="issue-item">
      <td>{issue.title}</td>
      <td>{issue.description}</td>
      <td className="status-indicator">
        <span className={getStatusClass(issue.status)}></span> {issue.status}
      </td>
      <td className="delete-button">
        <button onClick={() => onDelete(issue._id)}>Eliminar</button>
      </td>
      <td>
      <i className="fas fa-clock" style={{ marginRight: '5px', color: '#007bff' }}></i>
        {issue.updatedAt ? formatDate(issue.updatedAt) : 'N/A'}</td> {/* Nueva columna */}
    </tr>
  );
};

export default IssueItem;
