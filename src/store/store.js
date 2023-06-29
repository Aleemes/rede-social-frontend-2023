import { createStore, combineReducers } from 'redux';
import tarefasReducer from './reducers/tarefasReducer';
import editandoReducer from './reducers/editandoReducer';

const rootReducer = combineReducers({
  tarefas: tarefasReducer,
  editando: editandoReducer,
});

const store = createStore(rootReducer);

export default store;