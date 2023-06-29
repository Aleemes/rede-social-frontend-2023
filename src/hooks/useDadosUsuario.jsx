import { useState } from 'react';

/**
 * Hook que permite recuperar e armazenar dados do usuario (incluindo token de acesso) 
 * no localStorage (no browser)
 * @returns 
 */
function useDadosUsuario() {


    function getDadosUsuario() {
        /**
         * Modelo de dadosUsuario: {token: <token>, usuario: {username: <username>}}
         */
        const dadosUsuario = localStorage.getItem('dadosUsuario')
        if (!dadosUsuario) {
            return null
        }
        return JSON.parse(dadosUsuario);
    }

    const [dadosUsuario, setDadosUsuario] = useState(getDadosUsuario());

    function savedadosUsuario(dadosUsuario) {
        localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
        setDadosUsuario(dadosUsuario);
    };

    function removeDadosUsuario() {
        localStorage.removeItem("dadosUsuario");
        setDadosUsuario(null);
    }

    return {
        setDadosUsuario: savedadosUsuario,
        dadosUsuario,
        removeDadosUsuario
    }

}

export default useDadosUsuario;