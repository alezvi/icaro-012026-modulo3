import { Navigate, useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout";
import { useState, useEffect } from "react";

export default function LessonsView() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [lesson, setLesson] = useState({})

    useEffect(() => {
        fetch('http://localhost:5174/data/lessons.json')
            .then(response => response.json())
            .then(json => {
                setLesson(json.find(lesson => lesson.slug == id))
            })
    }, [])

    return (
        <Layout>
            <button onClick={() => navigate('/lessons')}>Volver</button>

            <h3>Detalle de la clase</h3>
            <h4>{ lesson.title }</h4>
            <p>{ lesson.description }</p>
        </Layout>
    )
}
