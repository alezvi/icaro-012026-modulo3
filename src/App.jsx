import { useState, useEffect } from 'react'
import useDateControls from './hooks/useDateControls'
import 'bootstrap/dist/css/bootstrap.min.css'
import PassengerForm from './PassengerForm'
import PassengersList from './PassengersList'

function App() {
  const { desde, hasta, today, prevDate, nextDate } = useDateControls()

  return (
    <div className='container'>
      <div className="row">
        <div className="col my-3">
          <div>Desde {desde} {hasta ? 'hasta ' + hasta : ''}</div>
          
          <button className='btn btn-sm btn-primary' onClick={prevDate}>
            Anterior
          </button>
          <button className='btn btn-sm btn-primary' onClick={today}>
            Hoy
          </button>
          <button className='btn btn-sm btn-primary' onClick={nextDate}>
            Siguiente
          </button>
        </div>
      </div>

      <PassengersList />
    </div>
  )
}

export default App
