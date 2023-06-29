import { Link } from "react-router-dom";
import FormCriarTarefa from "./FormCriarTarefa";


export function Header(props) {

    const renderHeader = () => {

        if (!props.dadosUsuario || props.dadosUsuario.usuario == undefined) {
            return (
                <p>
                    Por fazer, faça o <Link className="link-light" to="/loginForm">login</Link> ou
                    <Link className="link-light" to="/logout">cadastre-se</Link>
                </p>
            )
        } else {

            return (<FormCriarTarefa dadosUsuario={props.dadosUsuario}/>)

        }
    }

    return (
        <>
            <header className={"p-5 text-bg-secondary bg-gradient rounded text-center"}>
                <h1>LISTA DE TAREFAS</h1>

                {renderHeader()}

            </header>
        </>
    )
}