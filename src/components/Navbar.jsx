import "../css/style.css";
import Favicon from "../img/favicon.ico";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="/">
        <img className="icon" src={Favicon} alt="" />
        <span className="logo-title">LEO</span>
      </a>
      <nav className="links" aria-label="Primary">
        <ul className="links-list">
          <li>
            <a className="cv-link" href="/cv">
              Go to my CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
