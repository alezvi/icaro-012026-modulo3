import usePassengers from './hooks/usePassengers'
import PassengerForm from './PassengerForm'

function PassengersList() {
  const { pasajeros, agregarPasajero } = usePassengers()

  return (
      <div className="row">
        <div className="col">
          <h4>Pasajeros ({pasajeros.length})</h4>

          { pasajeros.map(pasajero => <PassengerForm pax={pasajero} />) }

          <button className='btn btn-sm btn-primary' onClick={agregarPasajero}>
            Agregar pasajero
          </button>
        </div>
      </div>
  )
}

export default PassengersList
