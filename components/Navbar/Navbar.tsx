import Image from "next/image";
import "./Navbar.css";
import GeminiDocsLogoSVG from "../../public/icons/GeminiDocsLogo.svg";
//This will need changes when put into NextJS so that the links will actually work.
function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-nav">
        <Image
          className="navbar-gemini-docs-logo"
          src={GeminiDocsLogoSVG}
          alt="Gemini Docs Logo"
        />
      </div>
      <div className="right-nav">
        <button className="navbar-about-button">About</button>
        <p className="navbar-fafsa-text">FAFSA</p>
        <p className="navbar-visa-text">Visa</p>
        <p className="navbar-university-applications-text">
          University Applications
        </p>
        <button className="sign-in-button">
          <p>Sign In</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
