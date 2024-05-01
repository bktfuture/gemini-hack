"use client";
import "./createaccount3.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import GoogleSignIn from "../../../public/icons/GoogleSignIn.svg";
import CreateAccountStepper1 from "../../../public/icons/CreateAccountStepper1.svg";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context/globalContext";
import { useState } from "react";

function CreateAccount3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { username, setUsername } = useGlobalContext();
  const router = useRouter();

  function moveToLoginScreen(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("signin");
  }

  return (
    <div className="outer-box">
      <Navbar />
      <div className="center-create-account1-container">
        <div className="create-account1-container">
          <p className="create-account1-text add-30-margin-bottom">
            Create an Account
          </p>
          <Image src={CreateAccountStepper1} alt="Create an account stepper" />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={moveToLoginScreen}>
            <div className="everything-above-button">
              <div className="center-email-input">
                <label className="create-account1-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input add-30-margin-bottom"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="everything-button-and-below">
              <button className="create-account1-button" type="submit">
                Next
              </button>
              <p>or</p>
              <Image src={GoogleSignIn} alt="Continue with Google button" />
              <p className="dont-have-account-text">
                Already have an account?
                <Link className="registration-link" href="/signin">
                  Login
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

export default CreateAccount3;
