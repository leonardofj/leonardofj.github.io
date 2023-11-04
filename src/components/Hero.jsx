import ProfilePic from "../img/viking.jpg";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <>
      <div class="hero">
        <img class="picture" src={ProfilePic} />
        <div class="about">
          <h1>Leonardo de Jesus</h1>
          <h3>Software Engineer</h3>
          <h3>Berlin, Germany</h3>
          <div class="soc-med">
            <a
              class="soc-med-icon"
              href="mailto:leonardofj@gmail.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              class="soc-med-icon"
              href="https://www.linkedin.com/in/leonardo-jesus/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              class="soc-med-icon"
              href="https://github.com/leonardofj"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <br />
          <h3>More coming soon!</h3>
        </div>
      </div>
    </>
  );
}
