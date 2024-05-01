import Image from "next/image";
import Link from "next/link";
import GeminiDocsLogoSVG from "../../public/icons/GeminiDocsLogo.svg";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <hr className="separator" />
      <footer className="footer">
        <div className="left-footer">
          <Link href="/about">
            <Image
              className="footer-gemini-docs-logo"
              src={GeminiDocsLogoSVG}
              alt="Gemini Docs logo"
            />
          </Link>
        </div>
        <div className="right-footer">
          <Link href="/about">
            <p className="footer-about-text">About</p>
          </Link>
          <Link href="/fafsa">
            <p className="footer-fafsa-text">FAFSA</p>
          </Link>
          <Link href="/visa">
            <p className="footer-visa-text">Visa</p>
          </Link>
          <Link href="/universityapplications">
            <p className="footer-university-applications-text">
              University Applications
            </p>
          </Link>
        </div>
      </footer>
      <p className="footer-copyright">
        © 2024 Gemini Docs. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
