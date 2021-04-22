import 'font-awesome/css/font-awesome.min.css';
import icon from './assets/icon.jpg';

function Socials() {
  return (
    <>
    <img src={icon} alt="SDM" id="logo" />
    <ul className="navbar-nav flex-row" id="social">
      <li>
        <a href="http://www.payforthllc.org" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a>
      </li>
      <li>
        <a href="http://www.payforthllc.org" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a>
      </li>
      <li>
        <a href="http://www.payforthllc.org" className="nav-link"><i className="fa fa-linkedin fa-lg"></i></a>
      </li>
    </ul>
    </>
  )
}

export default Socials;