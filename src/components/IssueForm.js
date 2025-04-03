// IssueForm.js
import React, { useState } from 'react';

const IssueForm = ({ onSubmit }) => {
  const [newIssue, setNewIssue] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newIssue);
    setNewIssue({ title: '', description: '' });  // Limpiar el formulario después de enviar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={newIssue.title}
        onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
      />
      <textarea
        placeholder="Descripción"
        value={newIssue.description}
        onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
      />
      <button type="submit">Agregar Problema</button>
    </form>
  );
};

export default IssueForm;
