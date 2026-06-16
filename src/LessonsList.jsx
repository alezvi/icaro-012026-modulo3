import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LessonsList() {
    const [lessons, setLessons] = useState([])

    useEffect(() => {
        fetch('http://localhost:5174/data/lessons.json')
            .then(response => response.json())
            .then(json => setLessons(json))
    }, [])

    return (
        <div className='col my-5'>
            { 
                lessons.map(lesson => {
                    return <div className='border p-3'>
                        <Link to={`/lessons/${lesson.slug}`} className='text-decoration-none'>
                            { lesson.title }
                        </Link>
                    </div>
                }) 
            }
        </div>
    )
}
