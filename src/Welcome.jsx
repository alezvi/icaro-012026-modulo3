import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import ConnectionStatus from './ConnectionStatus';
import LessonsList from './LessonsList';
import RegisterForm from './RegisterForm';
import './styles/App.css';

function Welcome() {
  const params = new URLSearchParams(window.location.search);

  let module = params.get('module') ?? 1;

  return (
    <div>
      <ConnectionStatus />
      <Navbar />

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <RegisterForm />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className="row">
          <div className="col-4">
            <div>Modulo 1 - HTML y CSS</div>
            <div>Modulo 2 - JS</div>
            <div>Modulo 3 - React</div>
            <div>Modulo 4 - Backend</div>
          </div>

          <div className="col-8">
            <LessonsList number={module} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
