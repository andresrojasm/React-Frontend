import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expanded-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href="#">
            React Frontend
          </a>
          <Link to="/nuevo/usuario" className='btn btn-outline-light'>Nuevo Usuario</Link>
          <button type='button'
            className='toggler bg-dark'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
      </nav>
    </div>
  )
}
