import React, { useState } from 'react';

const AjouterTache = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (description.trim() !== '') {
      onAdd(description);
      setDescription('');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ margin: '5px' }}
      />
      <button onClick={handleAdd} style={{ margin: '5px' }}>
        Ajouter
      </button>
    </div>
  );
};

export default AjouterTache;
