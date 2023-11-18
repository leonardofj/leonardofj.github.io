import "../css/style.css";
import Favicon from "../img/favicon.ico";

export default function Navbar() {
  return (
    <>
      <div class="navbar">
        <a class="logo" href="index.html">
          <img class="icon" src={Favicon} alt="gears icon" />
          <h2>LEO</h2>
        </a>
        <ul class="links">
          <il>
            <a href="/cv">
              <button type="button">Go to my CV</button>
            </a>
          </il>
        </ul>
      </div>
    </>
  );
}
