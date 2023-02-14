import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/inicio'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/info'>Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/productos'>Productos</Link>
        </li>
        <li className="nav__item">
            <a className="nav__link" href='#'>
            <CartWidget/>
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
