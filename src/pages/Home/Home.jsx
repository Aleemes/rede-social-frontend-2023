import { Header } from "../../components/Header/Header";
import  ListTarefas  from "../../components/ListTarefas/ListTarefas";


export function Home(props) {

    const tarefaSelecionada = null;


    return (
        <>
            <Header 
                dadosUsuario={props.dadosUsuario} />

            <ListTarefas dadosUsuario={props.dadosUsuario} />
    
        </>
    )
}