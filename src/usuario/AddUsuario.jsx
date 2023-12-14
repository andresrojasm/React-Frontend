import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const USUARIO_BASE_API = "http://localhost:8080/usuario";

export default function AddUsuario() {

  const navegar = useNavigate();
  
  const [usuario,setUsuario] = useState({
    nombre:"",
    username:"",
    email:""
  });

  const {nombre, username, email} = usuario;

  const onInputChange = (ev) => {
    setUsuario({...usuario,[ev.target.name]:ev.target.value});
  }

  const onSubmit = async (ev) =>{
    ev.preventDefault();
    await axios.post(USUARIO_BASE_API+"/nuevo",usuario);
    navegar("/");
  }

  return (
    <div className='container'>
        <div className='row'>
          <form onSubmit={(ev)=>onSubmit(ev)} className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>
              Registro de Usuarios
            </h2>
            <div className='mb-3'>
              <label htmlFor="nombre" className='form-label'>Nombre</label>
              <input type={"text"} name="nombre" id="nombre"
              className='form-control'
              placeholder='Ingrese su nombre'
              onChange={(ev)=>onInputChange(ev)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="username" className='form-label'>Usuario</label>
              <input type={"text"} name="username" id="username"
              className='form-control'
              placeholder='Ingrese su usuario'
              onChange={(ev)=>onInputChange(ev)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type={"text"} name="email" id="email"
              className='form-control'
              placeholder='Ingrese su email'
              onChange={(ev)=>onInputChange(ev)}
              />
            </div>

            <button type="submit" className='btn btn-primary mx-1'>Enviar</button>
            <button type="submit" className='btn btn-outline-danger mx-2'>Cancelar</button>


          </form>

        </div>
    </div>
  )
}
