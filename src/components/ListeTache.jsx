// mon-projet/src/components/ListeTache.jsx
import React from 'react';
import Tache from './Tache';

const ListeTache = ({ taches, onModifierTache }) => {
  return (
    <ul>
      {taches.map((tache) => (
        <Tache key={tache.id} tache={tache} onModifierTache={onModifierTache} />
      ))}
    </ul>
  );
};

export default ListeTache;
