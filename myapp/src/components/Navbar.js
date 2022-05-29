import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    

    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">product1</a></li>
            <li><a className="dropdown-item" href="#">product2</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className="dropdown-item" href="#">product3</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
  )
}
// prop type is used to check the type of prop we are sending like string numbers
Navbar.propTypes ={title :PropTypes.string 
// we can use .isrequired to at the end of string declare props necessarily
}
// default prop are used when we do not send any props 

Navbar.defaultProps = {
    title: 'App'
  };
