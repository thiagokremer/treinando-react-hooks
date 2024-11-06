import {useState} from "react"

const BoasVindas = () => {
    const [nome, setNome] = useState('');


    return(
        <>
            <input
            type="text" 
            placeholder="Digite seu nome"
            value={nome}
            onChange={ event => setNome(event.target.value) }
            />

            {nome !== '' && (
                <p>Seu nome é: {nome}</p>
            )} 

        </>
    )
}

export default BoasVindas;