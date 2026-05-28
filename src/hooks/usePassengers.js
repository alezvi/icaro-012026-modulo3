import { useState } from 'react'

function usePassengers() {
  const [pasajeros, setPasajeros] = useState([])

  function agregarPasajero() {
    setPasajeros(pasajeros.concat({
      nombre : 'Cosme',
      apellido : 'Fulanito',
      documento : '12341234'
    }))
  }

  return { pasajeros, agregarPasajero }
}

export default usePassengers
