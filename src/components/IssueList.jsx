import React from 'react';
import IssueItem from './IssueItem';

const IssueList = ({ issues, handleDelete }) => {
  if (!Array.isArray(issues) || issues.length === 0) {
    return <p>No hay problemas disponibles.</p>;
  }

  return (
    <div className="issue-list">
      <table className="issue-table">
        <thead>
          <tr className="issue-list-header">
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
            <th>Fecha Actualizacion</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(issue => (
            <IssueItem key={issue._id} issue={issue} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueList;
