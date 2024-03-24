import React from 'react';
import { Link } from 'react-router-dom';
//import './Header.css'; // Import CSS for styling the header

const Header = () => {
  return (
    <header className="sticky-top"> {/* Add a class to make the header sticky */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Temporary Accommodation</Link> {/* Use Link for logo */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register Accommodation</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">Search Accommodation</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
