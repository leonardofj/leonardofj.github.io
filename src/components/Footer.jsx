import "../css/style.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">
        COPYRIGHT © {year} Leonardo de Jesus
      </p>
    </footer>
  );
}
