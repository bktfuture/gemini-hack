"use client";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import GoogleSignIn from "../../public/icons/GoogleSignIn.svg";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../context/globalContext";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { username, setUsername } = useGlobalContext();
  const router = useRouter();

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsername(username);
    //Do API call.
    //If login details are NOT correct
    if (!email || !password) {
      setErrorMessage("Please enter your email and password");
      setEmail("");
      setPassword("");
      return;
    }
    //If login details are correct redirect to dashboard page.
    router.push("/dashboard");

    //Resetting email/password details to null.
    setEmail("");
    setPassword("");
  }

  return (
    <div className="outer-box">
      <Navbar />
      <div className="center-sign-in-container">
        <div className="sign-in-container">
          <p className="sign-in-text add-30-margin-bottom">Sign In</p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSignIn}>
            <div className="everything-above-button">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                className="input add-30-margin-bottom"
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input add-30-margin-bottom"
                type="email"
                id="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="input add-30-margin-bottom"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#" className="forgot-password add-30-margin-bottom">
                Forgot Password?
              </a>
            </div>
            <div className="everything-button-and-below">
              <button className="custom-sign-in-button" type="submit">
                Sign In
              </button>
              <p>or</p>
              <Image src={GoogleSignIn} alt="Continue with Google button" />
              <p className="dont-have-account-text">
                Don't have an account yet?{" "}
                <Link className="registration-link" href="/createaccount">
                  Register for free
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
