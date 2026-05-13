import ProfilePic from "../img/viking.jpg";
import "../css/style.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={{ md: 6 }}
      disableEqualOverflow
      sx={{ margin: "60px 0" }}
    >
      <Grid item>
        <img
          className="picture"
          src={ProfilePic}
          alt="Portrait of Leonardo de Jesus"
        />
      </Grid>
      <Grid item>
        <Container className="about">
          <h1>Leonardo de Jesus</h1>
          <p className="hero-subtitle">Software Engineer</p>
          <p className="hero-subtitle">Berlin, Germany</p>
          <div className="soc-med">
            <a
              className="soc-med-icon"
              href="mailto:leonardofj@gmail.com"
              aria-label="Email Leonardo de Jesus"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" aria-hidden />
            </a>
            <a
              className="soc-med-icon"
              href="https://www.linkedin.com/in/leonardo-jesus/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leonardo on LinkedIn (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" aria-hidden />
            </a>
            <a
              className="soc-med-icon"
              href="https://github.com/leonardofj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leonardo on GitHub (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" aria-hidden />
            </a>
          </div>
          <p className="hero-teaser">More coming soon!</p>
        </Container>
      </Grid>
    </Grid>
  );
}
