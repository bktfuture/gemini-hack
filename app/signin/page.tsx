'use client';
import './SignIn.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import GoogleSignIn from '../../public/icons/GoogleSignIn.svg';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../../context/globalContext';
import { useState } from 'react';
import axios from 'axios';
import aura from '../../public/Aura.png';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const router = useRouter();
	const { userInfo, setUserInfo } = useGlobalContext();

	function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		axios
			.get('http://127.0.0.1:8000/api/v1/user/auth-user', {
				params: {
					email: email,
					password: password,
				},
			})
			.then((response) => {
				setUserInfo('firstName', response.data.user_info.first_name);
				setUserInfo('lastName', response.data.user_info.last_name);
				setUserInfo('user_id', response.data.user_info.id);
				setUserInfo('email', response.data.user_info.email);
				router.push('/dashboard');
			})
			.catch((error) => {
				setErrorMessage('Please enter your email and password');
				setUserInfo('email', '');
				setPassword('');
				console.error('Error:', error);
				return;
			});
	}

	function handleGoogleSignIn() {
		router.push('http://127.0.0.1:8000/api/v1/glogin/login');
	}

	return (
		<div className="outer-box">
			<Navbar />
			<Image className="aura" src={aura}></Image>
			<div className="center-sign-in-container">
				<div className="sign-in-container">
					<p className="sign-in-text add-30-margin-bottom">Sign In</p>
					{errorMessage && <p className="error-message">{errorMessage}</p>}
					<form onSubmit={handleSignIn}>
						<div className="everything-above-button">
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
							<Image onClick={handleGoogleSignIn} src={GoogleSignIn} alt="Continue with Google button" />
							<p className="dont-have-account-text">
								Don't have an account yet?{' '}
								<Link className="registration-link" href="/createaccount/step1">
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
