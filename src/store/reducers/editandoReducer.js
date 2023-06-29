// Defina os tipos de ação
const EDITAR = 'EDITAR'
const CONCLUIR_EDICAO = 'CONCLUIR_EDICAO'

// Define o estado inicial
const estadoInicial = null;


// Define o reducer para manipular as ações
const tarefasReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case EDITAR:
      return action.payload.tarefa;
    case CONCLUIR_EDICAO:
      return null;
    default:
      return state;
  }
};

export default tarefasReducer;