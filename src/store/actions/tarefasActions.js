// Defina os tipos de ação
const ADICIONAR_TAREFA = 'ADICIONAR_TAREFA';
const ATUALIZAR_TAREFA = 'ATUALIZAR_TAREFA';
const REMOVER_TAREFA = 'REMOVER_TAREFA';
const SET_TAREFAS = 'SET_TAREFAS'


// Ação para carregar taregas
export const setTarefas = tarefas => ({
  type: SET_TAREFAS,
  payload: { tarefas: tarefas },
});

// Ação para adicionar uma tarefa
export const adicionarTarefa = tarefa => ({
  type: ADICIONAR_TAREFA,
  payload: { tarefa: tarefa },
});

// Ação para atualizar uma tarefa
export const atualizarTarefa = tarefa => ({
  type: ATUALIZAR_TAREFA,
  payload: { tarefa: tarefa },
});

// Ação para remover uma tarefa
export const removerTarefa = tarefaId => ({
  type: REMOVER_TAREFA,
  payload: { tarefaId: tarefaId },
});