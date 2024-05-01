"use client";
import "./createaccount2.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import GoogleSignIn from "../../../public/icons/GoogleSignIn.svg";
import CreateAccountStepper2 from "../../../public/icons/CreateAccountStepper2.svg";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context/globalContext";
import { useState } from "react";

function CreateAccount2() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  function moveToStep3(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/createaccount/step3");
  }

  return (
    <div className="outer-box">
      <Navbar />
      <div className="center-create-account1-container">
        <div className="create-account1-container">
          <p className="create-account1-text add-30-margin-bottom">
            Create an Account
          </p>
          <Image src={CreateAccountStepper2} alt="Create an account stepper" />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={moveToStep3}>
            <div className="everything-above-button">
              <div className="center-email-input">
                <label className="create-account1-label" htmlFor="email">
                  First Name
                </label>
                <input
                  className="input add-30-margin-bottom"
                  type="text"
                  id="email"
                  placeholder="Student's First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="center-email-input">
                <label className="create-account1-label" htmlFor="email">
                  Last Name
                </label>
                <input
                  className="input add-30-margin-bottom"
                  type="text"
                  id="email"
                  placeholder="Student's Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="everything-button-and-below">
              <button className="create-account1-button" type="submit">
                Next
              </button>
              <p>or</p>
              {/*<Image src={GoogleSignIn} alt="Continue with Google button" />*/}
              <p className="dont-have-account-text">
                Already have an account?
                <Link className="registration-link2" href="/signin">
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

export default CreateAccount2;
