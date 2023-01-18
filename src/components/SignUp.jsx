import { useFormik } from "formik";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	getAuth,
} from "@firebase/auth";
import { auth, provider, handleGoogle } from "../auth/Firebase";
import { Link } from "react-router-dom";
const SignUP = () => {
	const { handleSignup } = useAuthContext();
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		onSubmit: async (values) => {
			const { username, email, password } = values;
			try {
				setLoading(true);
				await createUserWithEmailAndPassword(auth, email, password)
					.then((response) => {
						console.log(response);
						toast.success("Account created successfully");
						setTimeout(() => {
							navigate("/home");
						}, 1000);
					})
					.catch((error) => toast.error(`Please enter correct details ${error}`));

				await updateProfile(auth.currentUser, {
					displayName: username,
				}).catch((error) => console.log(error.message));
			} catch (err) {
				setLoading(false);
				toast.error("Please enter valid details");
				console.log(err.message);
			} finally {
				setLoading(false);
			}
		},
	});

	/* const handleGoogle = () => {
		//const auth = getAuth();
	}; */
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="light"
			/>
			<div className="w-4/5 md:w-3/4 grid grid-cols-1 md:grid-cols-2 z-10 border-2 h-1/2 mx-auto mt-20  shadow-lg rounded-md">
				<div className="bg-login object-cover w-full hidden md:block"></div>
				<div>
					<div className="flex flex-col items-center gap-y-4  p-5">
						<h1 className="text-xl font-bold text-emerald-600">Create Account</h1>
						<div className="flex justify-between gap-x-4 text-2xl">
							<button className="rounded-full border-2 border-spacing-4" onClick={handleGoogle}>
								<FcGoogle />{" "}
							</button>
							<button className="rounded-full border-2 border-spacing-">
								<BsFacebook />
							</button>
							<button className="rounded-full border-2">
								<BsInstagram className="bg-pink-400" />{" "}
							</button>
						</div>
						<p>or use your email for registration</p>
					</div>
					<form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-y-4  p-5">
						<div className="grid grid-cols-1 md:grid-cols-6 gap-x-4">
							<label htmlFor="username" className="text-neutral-700 font-medium col-span-2">
								Username
							</label>
							<input
								type="text"
								id="username"
								name="username"
								placehoder="Enter the user name"
								className="border-b-4 border-emerald-600 focus:outline-none outline-none pl-2 col-span-4 text-black rounded-sm  "
								onChange={formik.handleChange}
								value={formik.values.username}
								autoComplete="off"
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-6 gap-x-4">
							<label htmlFor="email" className="text-neutral-700 font-medium col-span-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placehoder="Enter the email"
								className="border-b-4 border-emerald-600 focus:outline-none outline-none pl-2 col-span-4 text-black rounded-sm  "
								onChange={formik.handleChange}
								value={formik.values.email}
								autoComplete="off"
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-6 gap-x-4">
							<label htmlFor="password" className="text-neutral-700 font-medium col-span-2">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								placehoder="Enter the user name"
								className="border-b-4 border-emerald-600 focus:outline-none outline-none pl-2 col-span-4 text-black rounded-sm  "
								onChange={formik.handleChange}
								value={formik.values.password}
								autoComplete="off"
							/>
						</div>
						<small className="md:w-2/3">
							Password must contain at least eigth characters, including at least 1 letter and 1
							number
						</small>

						<button
							disabled={loading}
							type="submit"
							className="text-white bg-emerald-600 mt-3  hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium w-1/2 rounded-2xl text-xl py-1 text-center flex items-center justify-center"
						>
							{loading && (
								<svg
									aria-hidden="true"
									role="status"
									className={`inline w-4 h-4 mr-3 text-white ${loading ? "animate-spin" : ""}`}
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="#E5E7EB"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentColor"
									/>
								</svg>
							)}
							Sign Up
						</button>
					</form>
					<div className="flex items-center justify-center mb-2 px-1">
						<h3>
							Already have account, click here to{" "}
							<Link to="/login" className="text-blue-900  underline">
								Login
							</Link>
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUP;
