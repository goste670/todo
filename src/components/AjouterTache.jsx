// mon-projet/src/components/AjouterTache.jsx
import React, { useState } from 'react';

const AjouterTache = ({ onAjouterTache }) => {
  const [description, setDescription] = useState('');

  const handleAjouterClick = () => {
    if (description.trim() !== '') {
      onAjouterTache({ description, isDone: false });
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
  style={{
    backgroundColor: '#282c35', // Couleur de fond "neo dark"
    color: '#fff', // Couleur du texte blanc
    padding: '5px', // Ajout de rembourrage pour le confort visuel
    border: 'none', // Suppression de la bordure
    borderRadius: '5px', // Ajout de coins arrondis
    cursor: 'pointer', // Curseur de type main pour indiquer la possibilité de cliquer
  }}
  onClick={handleAjouterClick}
>
  Ajouter Une Tache
</button>
    </div>
  );
};

export default AjouterTache;
