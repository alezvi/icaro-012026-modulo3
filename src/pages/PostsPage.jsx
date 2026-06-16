import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../Layout"

export default function PostPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <Layout>
            <div className='col my-5'>
                { 
                    posts.map(post => {
                        return <div className='border p-3'>
                            <Link to={`/posts/${post.slug}`} className='text-decoration-none'>
                                { post.title }
                            </Link>
                            <p className="text-muted">{ post.body }</p>
                        </div>
                    }) 
                }
            </div>
        </Layout>
    )
}