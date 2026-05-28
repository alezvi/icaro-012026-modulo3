
export default function LessonsList({ number }) {
    let lessons = {
        1 : ['Introducción a HTML'],
        2 : ['Introducción a JS'],
        3 : ['Introduccion a React'],
        4 : ['Introduccion a Cliente y Servidor'],
    }

    return (
        <div>{ lessons[number] }</div>
    )
}
