import Image from "next/image";
import GeminiDocsLogoSVG from "../../public/icons/GeminiDocsLogo.svg";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <hr className="separator" />
      <footer className="footer">
        <div className="left-footer">
          <Image
            className="footer-gemini-docs-logo"
            src={GeminiDocsLogoSVG}
            alt="Gemini Docs logo"
          />
        </div>
        <div className="right-footer">
          <p className="footer-about-text">About</p>
          <p className="footer-fafsa-text">FAFSA</p>
          <p className="footer-visa-text">Visa</p>
          <p className="footer-university-applications-text">
            University Applications
          </p>
        </div>
      </footer>
      <p className="footer-copyright">
        © 2024 Gemini Docs. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
