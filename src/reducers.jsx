import { combineReducers } from 'redux';

const tachesReducer = (state = [], action) => {
  switch (action.type) {
    case 'AJOUTER_TACHE':
      return [...state, action.payload];
    case 'TOGGLER_TACHE':
      return state.map((tache) =>
        tache.id === action.payload ? { ...tache, isDone: !tache.isDone } : tache
      );
    case 'SUPPRIMER_TACHE':
      return state.filter((tache) => tache.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  taches: tachesReducer,
});

export default rootReducer;
