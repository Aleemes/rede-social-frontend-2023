import { useEffect, useState } from "react"

import { adicionarTarefa, atualizarTarefa } from "../../store/actions/tarefasActions";
import { concluirEdicao } from "../../store/actions/editandoActions";
import { connect } from "react-redux";

function FormCriarTarefa({editando, concluirEdicao, dadosUsuario, adicionarTarefa, atualizarTarefa}) {

    const [dadosForm, setDadosForm] = useState({texto: ""})


    useEffect(() => {
        if (editando) {
            setDadosForm({texto: editando.texto})
        }
    }, [editando])

    async function criarOuEditarTarefa(event) {
        event.preventDefault();

        let url_base = "http://localhost:3000";
        let url = `${url_base}/tarefas`
        let method = "POST"
        if (editando) {
            method = "PATCH"
            url += `/${editando._id}`
        }

        const res = await fetch(url, 
            {
                method: method,
                body: JSON.stringify(dadosForm),
                headers: {
                    Authorization: 'Bearer ' + dadosUsuario.token,
                    'Content-Type': 'application/json'
                },
            })
        if (res.ok) {
            const tarefa = await res.json()
            if (!editando) {
                adicionarTarefa(tarefa)
            } else {
                atualizarTarefa(tarefa)
                concluirEdicao()
            }
            setDadosForm({texto: ""})
        } else {
            //TRATAR ERROS
        }
    }

    function handleChange(event) {
        
        const { value, name } = event.target
        setDadosForm(anterior => ({
            ...anterior, [name]: value
        })
        )
    }

    return (
        <form>
            <div className="mb-3 mt-3">
                <input
                    className="form-control"
                    type="text"
                    name="texto"
                    id="tarefa"
                    placeholder="Insira uma tarefa"
                    value={dadosForm.texto}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary" id="addButton" onClick={criarOuEditarTarefa}>{editando? "Atualizar Tarefa": "Criar Tarefa"}</button>
        </form>
    )
}

  
const mapDispatchToProps = dispatch => ({
    adicionarTarefa: tarefa => dispatch(adicionarTarefa(tarefa)),
    atualizarTarefa: tarefa => dispatch(atualizarTarefa(tarefa)),
    concluirEdicao: () => dispatch(concluirEdicao())
});

const mapStateToProps = state => ({
    editando: state.editando
});
  


export default connect(mapStateToProps, mapDispatchToProps)(FormCriarTarefa);