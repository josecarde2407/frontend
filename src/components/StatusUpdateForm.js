import React from 'react';

const StatusUpdateForm = ({ filteredIssues, updateStatus, onStatusChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Actualizar Estado de un Problema</h2>
      <select
        value={updateStatus.id}
        onChange={(e) => onStatusChange({ ...updateStatus, id: e.target.value })}
      >
        <option value="">Selecciona un Problema</option>
        {filteredIssues.map((issue) => (
          <option key={issue._id} value={issue._id}>{issue.title}</option>
        ))}
      </select>

      {updateStatus.id && (
        <select
          value={updateStatus.status}
          onChange={(e) => onStatusChange({ ...updateStatus, status: e.target.value })}
        >
          <option value="">Seleccione una opción</option>
          <option value="En Progreso">En Progreso</option>
          <option value="Resuelto">Resuelto</option>
          <option value="Cerrado">Cerrado</option>
        </select>
      )}

      <button type="submit">Actualizar Estado</button>
    </form>
  );
};

export default StatusUpdateForm;
