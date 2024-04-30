'use client';
import './SignIn.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		//Do API call.
		//If login details are NOT correct
		if (!email || !password) {
			setErrorMessage('Please enter your email and password');
			setEmail('');
			setPassword('');
			return;
		}
		//If login details are correct redirect to home page.

		//Resetting email/password details to null.
		setEmail('');
		setPassword('');
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
							<label htmlFor="email">Email</label>
							<input
								className="email-input add-30-margin-bottom"
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<label htmlFor="password">Password</label>
							<input
								className="password-input add-30-margin-bottom"
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<a href="#" className="forgot-password add-30-margin-bottom">
								Forgot Password?
							</a>
						</div>
						<div className="everything-button-and-below">
							<button type="submit">Sign In</button>
							<p>or</p>
							<button>Continue with Google</button>
							<p>Don't have an account yet? Register for free</p>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default SignIn;
