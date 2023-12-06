import React from 'react';

const Tache = ({ id, description, isDone, onToggle, onDelete }) => {
  return (
    <li style={{ margin: '10px 0', textAlign: 'center' }}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={onToggle}
      />
      <span style={{ marginLeft: '10px', marginRight: '10px', color: 'lightblue' }}>
        {description}
      </span>
      <button onClick={onDelete} style={{ marginLeft: '5px' }}>
        Supprimer
      </button>
    </li>
  );
};

export default Tache;
