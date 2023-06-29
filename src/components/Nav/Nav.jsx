import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export function Nav(props) {

  const navigate = useNavigate();

  const logout = () => {
    props.removeDadosUsuario();
    navigate("/");
  }

  const renderAuthenticationButtons = () => {

    if (!props.dadosUsuario || !props.dadosUsuario.usuario) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cadastro">Cadastrar-se</Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item">
            Olá {props.dadosUsuario.usuario.username}!!
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={() => props.removeDadosUsuario()}>Logout</Link>
          </li>
        </>
      )
    }
}


  return (
    <>
      <nav className={"navbar navbar-expand-sm bg-light navbar-light"}>
        <div id="container1" className={"container-fluid"}>
          <Link to="/" className='navbar-brand'>Lista de Tarefas</Link>
        </div>
        <ul className={"navbar-nav me-auto mb-2 mb-rg-0"}>
          {renderAuthenticationButtons()}
        </ul>
      </nav>

    </>
  )
}