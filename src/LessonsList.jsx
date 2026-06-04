import { useParams } from 'react-router-dom'

export default function LessonsList() {
    const {id} = useParams()

    let lessons = {
        1 : ['Introducción a HTML'],
        2 : ['Introducción a JS'],
        3 : ['Introduccion a React'],
        4 : ['Introduccion a Cliente y Servidor'],
    }

    return (
        <div>{ lessons[id] }</div>
    )
}
