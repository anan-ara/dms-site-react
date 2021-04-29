import { NavLink } from "react-router-dom";

function Navlinks() {
  return (
    <>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <div className="me-auto"></div>
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="nav-link">
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.payforthllc.org">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.payforthllc.org">Contact</a>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Navlinks;
