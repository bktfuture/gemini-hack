"use client";
import "./createaccount.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import GoogleSignIn from "../../public/icons/GoogleSignIn.svg";
import CreateAccountStepper1 from "../../public/icons/CreateAccountStepper1.svg";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../context/globalContext";
import { useState } from "react";

function CreateAccount() {
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
      <div className="center-create-account-container">
        <div className="create-account-container">
          <p className="create-account-text add-30-margin-bottom">
            Create an Account
          </p>
          <Image src={CreateAccountStepper1} alt="Create an account stepper" />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSignIn}>
            <div className="everything-above-button">
              <div className="center-email-input">
                <label className="label" htmlFor="email">
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
              <button className="custom-create-account-button" type="submit">
                Next
              </button>
              <p>or</p>
              <Image src={GoogleSignIn} alt="Continue with Google button" />
              <p className="dont-have-account-text">
                Don't have an account yet?{" "}
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

export default CreateAccount;
