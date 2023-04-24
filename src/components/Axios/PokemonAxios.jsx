import { useEffect, useState } from "react";
import axios from "axios";

/**
 * O axios é uma biblioteca que faz requisições HTTP para uma API através de promises.
 * @returns 
 */

const PokemonAxios = () => {
    const [value, setValue] = useState({
        id: 1,
        name: "",
        front_image: "",
        back_image: ""
    });

    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${value.id}`) // O axios.get vai fazer uma requisição GET para a API.
            .then((response) => { // Então ele vai retornar uma resposta, onde o usuário vai extrair os dados.
                setValue(
                    {
                        id: response.data.id,
                        name: response.data.name,
                        front_image: response.data.sprites.front_default,
                        back_image: response.data.sprites.back_default
                    }
                );
            })
            .catch((error) => alert(error)) // Caso ocorra algum erro, ele vai retornar um alerta.

        }, [value.id]
    )

    return(
        <>
            <table border="10px">
                <tbody>
                    <tr>
                        <td colSpan={2} style={{textAlign: "center"}}>
                            Name: {value.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={value.front_image} alt="" style={{width: "300px"}}/>
                        </td>
                        <td>
                            <img src={value.back_image} alt="" style={{width: "300px"}}/>
                        </td>
                    </tr>
                    <td>
                        <button onClick={() => {setValue({id: value.id + 1})}}>ID + 1</button>
                    </td>
                    <td>
                        <button onClick={() => {setValue({id: value.id - 1})}}>ID - 1</button>
                    </td>
                </tbody>
            </table>
        </>
    );
}

export default PokemonAxios;