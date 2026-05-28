
// Sanitización - Formateo - Normalización
    // No simbolos
    // Mayúscula
// Validación
    // Ingresa dato
    // Se valida el dato
    // Se responde al usuario

import { use, useState } from "react"

// Caso: "nombre"
// No acepta vacío / Requerido
// Solo acepta letras y espacios
// Mínimo 3 letras
// Maximo 20 letras

export default function RegisterForm() {
    const [nameIsValid, setNameIsValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    function validate(e) {
        const {value} = e.target

        setErrorMessage(null)
        hasMinChars(value) ? null : setErrorMessage('El minimo son 3 letras')
        hasMaxChars(value) ? null : setErrorMessage('El maximo son 20 caracteres')
        isNotEmpty(value) ? null : setErrorMessage('El nombre es requerido')
        hasOnlyAlphaAndSpaces(value) ? null : setErrorMessage('Solo letras y espacios')

        setNameIsValid(errorMessage == null)
    }

    function isAlias(s) {
        return /^[a-z]+\.[a-z]+\.[a-z]+$/.test(s)
    }

    function isSecure(s) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(s)
    }
    
    function hasMinChars(s) {
        return s.length >= 3
    }

    function hasMaxChars(s) {
        return s.length <= 20
    }

    function isNotEmpty(s) {
        return s.length > 0;
    }

    function hasOnlyAlphaAndSpaces(s) {
        return /^[A-Z]+\s?/i.test(s)
    }

    return (
        <form>
            <button onClick={(e) => {
                e.preventDefault()
                setShowPassword(!showPassword)
            }}>Mostrar</button>

            <div className="form-floating my-2">
                <input className="form-control" type={showPassword ? 'text' : 'password'} onInput={validate} />
                <label className="form-label">Clave</label>
                { nameIsValid ? '' : <p className="text-danger">{errorMessage}</p> }
            </div>
            
            <div className="form-floating my-2">
                <button className="btn btn-primary">Enviar</button>
            </div>
        </form>
    )

}