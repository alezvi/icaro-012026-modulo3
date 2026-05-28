import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileForm() {
  const { register, handleSubmit, formState : {errors} } = useForm()
  
  function onSubmit(data) {
    console.log(data)
  }

  function validateCuit(cuit) {
    return /^\d{2}\-\d{7,8}\-\d{1}$/i.test(cuit) || 'Formato de CUIT inválido';
  }

  return (
    <div className='m-3'>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='form-floating'>
          <input 
            {...register('username', {required: 'Requerido'})} 
            className='form-control' 
            type="text" 
          />
          
          <label htmlFor="" className='form-label'>Ingrese su nombre</label>

          { errors?.username?.message || '' }
        </div>

        <div className='form-floating'>
          <input 
            {...register('cuit', {
              required: 'Requerido',
              validate: validateCuit
            })}
            className='form-control' 
            type="text" 
          />
          
          <label htmlFor="" className='form-label'>Ingrese su CUIT</label>

          { errors?.cuit?.message || '' }
        </div>

        <div className="form-group my-3">
          <button className="btn btn-primary">Continuar</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
