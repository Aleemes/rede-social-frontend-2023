import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login(props) {

  const [loginForm, setLoginForm] = useState(
    {
      username: "",
      senha: ""
    }
  )

  const navigate = useNavigate();

  async function logar(event) {
    event.preventDefault();  // necessário pois é chamado quando o evento é de submit

    // let url_base = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:3000";
    let url_base = "http://localhost:3000";
    let url = `${url_base}/usuarios/login`;

    const res = await fetch(url,
      {
        method: "POST",
        body: JSON.stringify(loginForm),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (res.ok) {
      const json = await res.json();
      console.log(json);
      props.setDadosUsuario(json);

      // REDIRECIONAR PARA A TELA INICIAL
      navigate("/");

    } else {
      console.log("ERRO");  // TODO: Fazer tratamento de erros correto
    }

  }

  function handleChange(event) {
    const { value, name } = event.target
    setLoginForm(anterior => ({
      ...anterior, [name]: value
    }) // código que permite atualizar qualquer campo do objeto de estado 'loginForm'
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="form-group">
        <input onChange={handleChange}
          type="text"
          text={loginForm.username}
          name="username"
          placeholder="username"
          value={loginForm.username} />
        <input onChange={handleChange}
          type="password"
          text={loginForm.senha}
          name="senha"
          placeholder="senha"
          value={loginForm.senha} />

        <button onClick={logar}>Submit</button>
      </form>
    </div>
  )
}