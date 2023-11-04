import "../css/main.css";

export default function Navbar() {
  return (
    <>
      <div class="navbar">
        <a class="logo" href="index.html">
          <img class="icon" src="favicon.ico" alt="gears icon" />
          <h2>LEO</h2>
        </a>
        <ul class="links">
          <il>
            <a
              href="files/Leonardo de Jesus.pdf"
              download="Leonardo de Jesus.pdf"
              target="_blank"
            >
              <button type="button">Download CV</button>
            </a>
          </il>
        </ul>
      </div>
    </>
  );
}
