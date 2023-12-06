// mon-projet/src/App.jsx
import React, { useState } from 'react';
import AjouterTache from './components/AjouterTache';
import ListeTache from './components/ListeTache';

import './styles/App.css'; 

const App = () => {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (nouvelleTache) => {
    setTaches([...taches, { ...nouvelleTache, id: Date.now() }]);
  };

  const modifierTache = (id, isDone) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, isDone: isDone } : tache
      )
    );
  };

  return (
    <div>
      <h1 className="title">
        <img src="/public/tata.gif" alt="GIF" />
        ToDo App
      </h1>

      <div className="container">
        <div className="box add-box">
          <AjouterTache onAjouterTache={ajouterTache} />
        </div>
        <div className="box display-box">
          <ListeTache taches={taches} onModifierTache={modifierTache} />
        </div>
      </div>
    </div>
  );
};

export default App;

