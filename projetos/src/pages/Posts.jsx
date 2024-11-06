import {useState, useEffect} from "react"

const Posts = () =>{
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const getAPI = async () =>{
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (res.status !==200) {
                    throw new Error("Erro ao buscar posts")
                }
                const data = await res.json()
                setPosts(data)

            } catch (error) {
                console.log(error.message)
            }
        }
        getAPI()
    }, [])

    return(
        <>
            <h1>Posts</h1>

            {posts.map( (post) => (
                <>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <hr/>
                </>
            ))}
        </>
    )
}

export default Posts;