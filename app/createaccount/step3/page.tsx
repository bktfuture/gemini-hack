"use client";
import "./createaccount3.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import BlueCheckBox from "../../../public/icons/blue_check_box.svg";
import PurpleCheckBox from "../../../public/icons/purple_check_box.svg";
import BlankCheckBox from "../../../public/icons/blank_check_box.svg";
import GoogleSignIn from "../../../public/icons/GoogleSignIn.svg";
import CreateAccountStepper3 from "../../../public/icons/CreateAccountStepper3.svg";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context/globalContext";
import { useState } from "react";

function CreateAccount3() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [blueCheckBoxToggle, setBlueCheckBoxToggle] = useState(false);
  const [purpleCheckBoxToggle, setPurpleCheckBoxToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  function moveToLoginScreen(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setErrorMessage("Passwords are not the same. Try again!");
      return;
    } else if (!blueCheckBoxToggle) {
      setErrorMessage("Must agree to terms and conditions to sign up!");
      return;
    }
    router.push("signin");
  }

  function toggleBlueCheckBoxColor() {
    setBlueCheckBoxToggle(!blueCheckBoxToggle);
  }

  function togglePurpleCheckBoxColor() {
    setPurpleCheckBoxToggle(!purpleCheckBoxToggle);
  }

  return (
    <div className="outer-box">
      <Navbar />
      <div className="center-create-account1-container">
        <div className="create-account1-container">
          <p className="create-account1-text add-30-margin-bottom">
            Create an Account
          </p>
          <Image src={CreateAccountStepper3} alt="Create an account stepper" />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={moveToLoginScreen}>
            <div className="everything-above-button">
              <div className="center-email-input">
                <label className="create-account1-label" htmlFor="email">
                  Password
                </label>
                <input
                  className="input add-30-margin-bottom"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="center-email-input">
                <label className="create-account1-label" htmlFor="email">
                  Confirm Password
                </label>
                <input
                  className="input add-30-margin-bottom"
                  type="password"
                  id="password"
                  placeholder="Re-enter your password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                />
              </div>
              <div className="all-checkbox-content">
                <div className="checkbox-content">
                  <Image
                    onClick={toggleBlueCheckBoxColor}
                    src={blueCheckBoxToggle ? BlueCheckBox : BlankCheckBox}
                    alt="Blue Check Box"
                  />
                  <p className="agreement-text">
                    By creating an account, I agree to our{" "}
                    <span style={{ textDecoration: "underline" }}>
                      Terms of use{" "}
                    </span>
                    and
                    <span style={{ textDecoration: "underline" }}>
                      {" "}
                      Privacy Policy
                    </span>
                    .
                  </p>
                </div>
                <div className="checkbox-content">
                  <Image
                    onClick={togglePurpleCheckBoxColor}
                    src={purpleCheckBoxToggle ? PurpleCheckBox : BlankCheckBox}
                    alt="Purple Check Box"
                  />
                  <p className="agreement-text">
                    By creating an account, I am also consenting to receive SMS
                    messages and emails.
                  </p>
                </div>
              </div>
            </div>
            <div className="everything-button-and-below">
              <button className="create-account1-button" type="submit">
                Sign Up
              </button>
              <p className="dont-have-account-text">
                Already have an account?
                <Link className="registration-link3" href="/signin">
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
