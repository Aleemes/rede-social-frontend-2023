import { useCallback, useEffect, useState } from "react"
import './ListTarefas.css'
import { connect } from "react-redux";
import { setTarefas, atualizarTarefa, removerTarefa } from "../../store/actions/tarefasActions";
import { editar } from "../../store/actions/editandoActions";
import { PencilSquare, Trash } from "react-bootstrap-icons";

function ListTarefas({ editar, dadosUsuario, tarefas, setTarefas, atualizarTarefa, removerTarefa }) {

    let url_base = "http://localhost:3000";
    let url = `${url_base}/tarefas`;

    const fetchData = useCallback(async (token) => {

        const res = await fetch(url,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        );

        if (res.ok) {
            const json = await res.json();
            // console.log(json.reduce((lista, valor) => ({ ...lista, [valor._id]: valor }), {}));  //transforma em um dicionario/objeto suja chave é o id
            setTarefas(json);

        } else {
            // TODO: Fazer tratamento de erros correto
        }
    }, [setTarefas])

    useEffect(() => {
        if (dadosUsuario && dadosUsuario.usuario) {
            fetchData(dadosUsuario.token);
        } else {
            setTarefas([]);
        }
    }, [fetchData, dadosUsuario, setTarefas])


    const marcarTarefaComoFeita = async (tarefa) => {

        if (!tarefa.feito) {
            tarefa.feito = true;

            const res = await fetch(`${url}/${tarefa._id}`,
                {
                    method: "PATCH",
                    body: JSON.stringify(tarefa),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${dadosUsuario.token}`
                    }
                }
            )
            if (res.ok) {
                atualizarTarefa(tarefa);
            }
        }
    }


    const deleteTarefa = async (tarefaId) => {
        const res = await fetch(`${url}/${tarefaId}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${dadosUsuario.token}`
                }
            }
        );
        if (res.ok) {
            removerTarefa(tarefaId);
        }
    } 


    return (
        <>
            <section id="list-tarefas">

                <table className="table table-striped">
                    <tbody>
                        {tarefas.map(tarefa => {
                            return (
                                <tr key={tarefa._id} className="linha-tarefa">
                                    <td className="coluna-texto">
                                        <span className={`item-tarefa check-${tarefa.feito}`}
                                            onClick={() => marcarTarefaComoFeita(tarefa)}>
                                            {tarefa.texto}
                                        </span>
                                        <span id="criado-em">Criado em {tarefa.data} </span>
                                    </td>

                                    <td className="coluna-botoes">
                                        <span 
                                            className="btn btn-success" 
                                            onClick={() => editar(tarefa)}>
                                            {/*  <PencilSquare/> 
                                                <img src={"coracao.png"}> </img>// ADD HEART DO POST */}
                                        </span>
                                        <span 
                                            className="btn btn-danger item-tarefa" 
                                            onClick={() => deleteTarefa(tarefa._id)}>
                                                <Trash/>
                                        </span>
                                    </td>

                                    <div>{tarefa.comentarios.map(comentario => {
                                        //CODIGO HTML INSERINDO OS DADOS DO COMENTARIOS
                                    })}</div>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </section>
        </>
    )
}


const mapStateToProps = state => ({
    tarefas: state.tarefas,
});

const mapDispatchToProps = dispatch => ({
    setTarefas: tarefas => dispatch(setTarefas(tarefas)),
    atualizarTarefa: tarefa => dispatch(atualizarTarefa(tarefa)),
    removerTarefa: tarefaId => dispatch(removerTarefa(tarefaId)),
    editar: (tarefa) => dispatch(editar(tarefa))
});


export default connect(mapStateToProps, mapDispatchToProps)(ListTarefas);