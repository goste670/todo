import React from 'react';
import AjouterTache from './components/AjouterTache';
import ListeTache from './components/ListeTache';
import './App.css';  // Assurez-vous d'ajuster le nom du fichier CSS si nécessaire

function App() {
  const [taches, setTaches] = React.useState([]);

  const ajouterTache = (description) => {
    const nouvelleTache = {
      id: new Date().getTime(),
      description,
      isDone: false,
    };
    setTaches([...taches, nouvelleTache]);
  };

  const toggleTache = (id) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, isDone: !tache.isDone } : tache
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((tache) => tache.id !== id));
  };

  return (
    <div className="container">
      <h1>
        ToDo List
        <img
          className="work-img"
          src="./tata.gif"  // Assurez-vous d'ajuster le chemin si nécessaire
          alt="f"
        />
      </h1>
      <AjouterTache onAdd={ajouterTache} />
      <ListeTache
        taches={taches}
        onToggle={toggleTache}
        onDelete={supprimerTache}
      />
    </div>
  );
}

export default App;
