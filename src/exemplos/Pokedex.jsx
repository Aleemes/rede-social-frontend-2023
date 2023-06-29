import { useEffect, useState } from "react";

export function Pokedex(props) {

    const [enderecoImagem, setEnderecoImagem] = useState("")

    useEffect(() => {

        const fetchData = async () => {
            //// CARREGAR DADOS DO POKEMON CUJO NOME ESTÁ EM props
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.nome}`,
                {
                    method: "GET",
                    headers: {
                        "content-type": "application/json; charset=utf-8"
                    }
                }
            );
            if (res.ok){
                const json = await res.json();
                setEnderecoImagem(json["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["back_default"])
            }
        }
        //chama função fetchData:
        fetchData()
          
    }, [props, setEnderecoImagem]
    )


    return (
        <>
        <img width={100} src={enderecoImagem} alt="IMAGEM NAO CARREGADA" />
        </>
    )

}