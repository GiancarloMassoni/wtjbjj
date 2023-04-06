import React from "react";

function NavBar() {
  return(
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container">
          <img src="./logo.jpeg" className="logo navbar-brand" alt="logo"></img>

          <button
          className="navbar-toggler justify-content-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon justify-content-center"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center px-4" id="navmenu">
            <ul className="navbar-nav text-white">
              <li className="nav-item px-4 ">
              <a href="#home" className="nav-link text-white">HOME</a>
              </li>
              <li className="nav-item px-4">
              <a href="#schedule" className="nav-link text-white">SCHEDULE</a>
              </li>
              <li className="nav-item px-4">
              <a href="#coaches" className="nav-link text-white">COACHES</a>
              </li>
              <li className="nav-item px-4">
              <a href="#pricing" className="nav-link text-white">PRICING</a>
              </li>
              <li className="nav-item px-4">
              < a href="#blog" className="nav-link text-white">BLOG</a>
              </li>
            </ul>
            <button type="button" className="btn btn-light justify-content-end">START NOW</button>
          </div>
        </div>

      </nav>

  )
}

export default NavBar;
