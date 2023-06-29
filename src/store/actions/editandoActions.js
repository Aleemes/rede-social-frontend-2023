// Defina os tipos de ação
const EDITAR = 'EDITAR'
const CONCLUIR_EDICAO = 'CONCLUIR_EDICAO'


// Ação para carregar tarefas
export const editar = (tarefa) => ({
  type: EDITAR,
  payload: { tarefa: tarefa },
});

// Ação para adicionar uma tarefa
export const concluirEdicao = () => ({
  type: CONCLUIR_EDICAO,
  payload: { },
});
