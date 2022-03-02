import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">East Coast Greenway</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse navbar-brand" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="About">About</a>
            <a className="nav-item nav-link" href="#">Explore</a>
            <a className="nav-item nav-link disabled" href="#">My Trip</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar