import React, { Component } from 'react'

import { Link } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav  className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Honest News Hub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
       
          <Link className="nav-link active " aria-current="page" to="/business">Business</Link>
        
          <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        
          <Link className="nav-link active" aria-current="page" to="/">General</Link>
        
          <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
        
          <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
       
          <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
        
        
          <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
        
      </ul>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default Navbar
