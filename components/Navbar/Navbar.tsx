import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import GeminiDocsLogoSVG from "../../public/icons/GeminiDocsLogo.svg";
import { useRouter } from "next/navigation";
//This will need changes when put into NextJS so that the links will actually work.
function Navbar() {
  const router = useRouter();

  function handleSignInButtonClick() {
    router.push("/signin");
    return;
  }

  return (
    <nav className="navbar">
      <div className="left-nav">
        <Link href="/dashboard">
          <Image
            className="navbar-gemini-docs-logo"
            src={GeminiDocsLogoSVG}
            alt="Gemini Docs Logo"
          />
        </Link>
      </div>
      <div className="right-nav">
        <Link href="/about">
          <p className="navbar-about-text">About</p>
        </Link>
        <Link href="/fafsa">
          <p className="navbar-fafsa-text">FAFSA</p>
        </Link>
        <Link href="/visa">
          <p className="navbar-visa-text">Visa</p>
        </Link>
        <Link href="universityapplications">
          <p className="navbar-university-applications-text">
            University Applications
          </p>
        </Link>
        <button onClick={handleSignInButtonClick} className="sign-in-button">
          <p>Sign In</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
