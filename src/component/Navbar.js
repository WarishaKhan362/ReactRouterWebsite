import React from 'react';
import {Link } from 'react-router-dom';
// import logo from "./logo.png"
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          
  <div className="container-fluid">
     
    <a className="navbar-brand row1 text-danger shadow-lg p-1 mb-1  fw-bold  " href="/"> MY IMAGE GALLERY</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
        </li> */}
        
        <li className="nav-item mx-2">
          <Link className="nav-Link active text-secondary text-decoration-none" to="/bike">Bikes</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-Link active text-secondary text-decoration-none" to="/car">Cars</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-Link active text-secondary text-decoration-none" to="/festivals">Our Festivals</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-Link active text-secondary text-decoration-none" aria-current="page" to="/contacts">Contacts</Link>
        
         
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-Link active text-secondary text-decoration-none" to="/blogs" tabindex="-1" aria-disabled="False">Blogs</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
