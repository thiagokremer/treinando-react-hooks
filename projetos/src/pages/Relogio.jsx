import {useState, useEffect} from "react"

const Relogio = () => {
    const [tempo, setTempo] = useState(new Date())

    useEffect(() => {
        const timer = setInterval( () =>{
            setTempo(new Date())
        }, 1000)


        return () => clearInterval(timer)
    }, [])

    const tempoFormatado = tempo.toLocaleTimeString('pt-BR', {
        hour12:false,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    })

    const horas = tempo.getHours()
    const minutos = tempo.getMinutes()
    const segundos = tempo.getSeconds()

    return(
        <>
            <h1>Relógio</h1>
            <p>{horas}:{minutos}:{segundos}</p>
            <p>{tempoFormatado}</p>

        </>
    )
}

export default Relogio;