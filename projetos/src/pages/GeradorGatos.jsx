import {useState, useEffect} from "react"

const GeradorGatos = () => {
    const [dados, setDados] = useState('')

    useEffect(() => {
        const getApi = async () => {
            try {
                const resposta = await fetch('https://api.thecatapi.com/v1/images/search')
                if (resposta.status !== 200) {
                    throw new Error("Erro ao buscar o gatinho");
                }
                const dados = await resposta.json()
                setDados(dados[0].url)

            } catch (error) {
                console.log(error.messsage)
            }
        
        }
        getApi()
    }, [])

    return(
        <>
            <h1>Gerador Gatos</h1>

            { dados!== '' && (
                <>
                    <p>Recarregue a página para mudar o gatinho</p>
                    <img width='300' src={dados} alt="Gatinho" />
                </>
            )}

        </>
    )
}

export default GeradorGatos;