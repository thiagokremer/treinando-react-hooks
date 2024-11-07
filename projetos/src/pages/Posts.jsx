import {useState, useEffect} from "react"

const Posts = () =>{
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [carregando, setCarregando] = useState(true)

    useEffect(()=>{
        const getAPI = async () =>{
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (res.status !==200) {
                    throw new Error("Erro ao buscar posts, recarregue a página")
                }
                const data = await res.json()
                setPosts(data)
                setCarregando(false)

            } catch (error) {
                setError(error.message)
            }
        }
        getAPI()
    }, [])

    return(
        <>
            <h1>Posts</h1>

            {error !== '' && (
                <p>{error}</p>
            )}

            {carregando ? (
                <p>Carregando...</p>
            ) : (
                posts.slice(0,10).map( (post) => (
                    <>
                        <span>{post.id}</span>                    
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <hr/>
                    </>
                ))
            )}

        </>
    )
}

export default Posts;