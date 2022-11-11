/* eslint-disable global-require */
import './style/navBar.css';

const Navbar = () => (
  <nav>
    <div className="logo-container">
      <img
        src={require('../../images/logo.gif')}
        alt="logo"
      />
    </div>
    <ul className="nav-links">
      <a href="/" className="nav-link">Home</a>
      <a href="/" className="nav-link">About</a>
      <a href="/" className="nav-link">Projects</a>
      <a href="/" className="nav-link">Contact</a>
    </ul>
  </nav>
);

export default Navbar;
