import React from "react";

export const Footer = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex">
          
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Copyright <i class="fa-solid fa-copyright text-light"></i> Your Website 2019</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
    
    }