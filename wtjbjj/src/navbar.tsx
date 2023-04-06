import React from "react";

function NavBar() {
  return(
      <nav className="navbar navbar-expand-lg bg-light">
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

          <div className="collapse navbar-collapse justify-content-center" id="navmenu">
            <ul className="navbar-nav">
              <li className="nav-item p-4">
                <a href="#home" className="nav-link">HOME</a>
              </li>
              <li className="nav-item p-4">
                <a href="#schedule" className="nav-link">SCHEDULE</a>
              </li>
              <li className="nav-item p-4">
                <a href="#coaches" className="nav-link">COACHES</a>
              </li>
              <li className="nav-item p-4">
               <a href="#pricing" className="nav-link">PRICING</a>
              </li>
              <li className="nav-item p-4">
                < a href="#blog" className="nav-link">BLOG</a>
              </li>
            </ul>
            <button type="button" className="btn btn-success justify-content-end">START NOW</button>
          </div>
        </div>

      </nav>

  )
}

export default NavBar;
