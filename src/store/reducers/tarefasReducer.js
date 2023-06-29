// Defina os tipos de ação
const ADICIONAR_TAREFA = 'ADICIONAR_TAREFA';
const ATUALIZAR_TAREFA = 'ATUALIZAR_TAREFA';
const REMOVER_TAREFA = 'REMOVER_TAREFA';
const SET_TAREFAS = 'SET_TAREFAS'

// Define o estado inicial
const estadoInicial = [];


// Define o reducer para manipular as ações
const tarefasReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case SET_TAREFAS:
      return action.payload.tarefas;
    case ADICIONAR_TAREFA:
      return [...state, action.payload.tarefa];
    case ATUALIZAR_TAREFA:
      return state.map(tarefa =>
        tarefa._id === action.payload.tarefa._id ? action.payload.tarefa : tarefa
      );
    case REMOVER_TAREFA:
      return state.filter(tarefa => tarefa._id !== action.payload.tarefaId);
    default:
      return state;
  }
};

export default tarefasReducer;