"use client";
import "./createaccount1.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import GoogleSignIn from "../../../public/icons/GoogleSignIn.svg";
import CreateAccountStepper1 from "../../../public/icons/CreateAccountStepper1.svg";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context/globalContext";
import { useState } from "react";

function CreateAccount1() {
  const [errorMessage, setErrorMessage] = useState("");
  const {userInfo, setUserInfo} = useGlobalContext();

  const router = useRouter();

  function moveToStep2(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/createaccount/step2");
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
          <form onSubmit={moveToStep2}>
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
                  value={userInfo.email}
                  onChange={(e) => setUserInfo('email', e.target.value)}
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
                <Link className="registration-link1" href="/signin">
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

export default CreateAccount1;
