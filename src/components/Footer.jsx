import "../styles/Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Keaton Greer</p>
        <div className="footer-social-links">
          <a href="https://github.com/keatongreer" aria-label="GitHub">
            <span className="bi bi-github"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
