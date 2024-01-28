import React from 'react';
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container d-flex justify-content-between">
          <h1 className="title">EasyRate Converter</h1>
          <Link to="/" className="navbar-brand mb-0 h1">Currency Exchange Rates</Link>
        </div>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="mb-2">
          <h6><span className="badge bg-secondary"><a className="mr-3" href="https://github.com/Dalbenjr" target="_blank" rel="noopener noreferrer">GitHub</a></span></h6>
        </div>
        <div>
          <span className="mr-3 text-secondary">Built by <a href="https://juniordalben.co.uk/" target="_blank" rel="noopener noreferrer">Junior Dalben</a> in collaboration with  <a href="https://www.altcademy.com" target="_blank" rel="noopener noreferrer">Altcademy </a></span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
