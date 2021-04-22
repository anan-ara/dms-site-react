import Socials from './Socials.js';
import Navlinks from './Navlinks.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-md navbar-light" style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid">
          <Socials />
          <div className="ms-auto"></div>
          <Navlinks />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
