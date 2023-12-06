// mon-projet/src/components/Tache.jsx
import React from 'react';

const Tache = ({ tache, onModifierTache }) => {
  const { id, description, isDone } = tache;

  return (
    <li>
      <input
        type="checkbox"
        className="checckbox"
        checked={isDone}
        onChange={() => onModifierTache(id, !isDone)}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {description}
      </span>
    </li>
  );
};

export default Tache;
