import React from 'react';
import Tache from './Tache';

const ListeTache = ({ taches, onToggle, onDelete }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
      {taches.map((tache) => (
        <Tache
          key={tache.id}
          {...tache}
          onToggle={() => onToggle(tache.id)}
          onDelete={() => onDelete(tache.id)}
        />
      ))}
    </ul>
  );
};

export default ListeTache;
