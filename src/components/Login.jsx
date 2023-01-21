import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth, handleGoogle } from "../auth/Firebase";
import { validate } from "./SignUp";
const Login = () => {
	const { user } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validate,
		onSubmit: async (values) => {
			const { email, password } = values;
			try {
				setLoading(true);
				const response = await signInWithEmailAndPassword(auth, email, password);
				if (response) {
					setTimeout(() => {
						navigate("/home");
					}, 1000);
				}
			} catch (err) {
				setLoading(false);
				console.log(err);
				toast.error("Please enter correct details");
			} finally {
				setLoading(false);
			}
		},
	});

	//on button click sign in with google
	const google = () => {
		handleGoogle();
	};

	useEffect(() => {
		//if user is logged in the alert login successfull and redirect to home
		if (user) {
			toast.success("Login successful");
			setTimeout(() => {
				navigate("/home");
			}, 1000);
		}
	}, [user]);
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
			<div className="w-3/4 grid grid-cols-1 md:grid-cols-2 z-10 border-2 h-1/2 mx-auto mt-20  shadow-lg rounded-md">
				<div className="bg-login object-cover w-full hidden md:block"></div>
				<div>
					<div className="flex flex-col items-center gap-y-2 p-2">
						<h1 className="text-xl font-bold text-emerald-600">Login</h1>
						<div className="flex justify-between gap-x-4">
							<button
								className="rounded-xl border-2 w-44 bg-slate-200 flex items-center gap-x-1  justify-center border-spacing-4"
								onClick={google}
							>
								<FcGoogle /> Login with Google
							</button>
						</div>
						<p>or sign in with email</p>
					</div>

					<form onSubmit={formik.handleSubmit} className="flex flex-col p-5 items-center ">
						<div className="grid grid-cols-1 md:grid-cols-6">
							<label htmlFor="email" className="text-neutral-700 font-medium col-span-2">
								Email
							</label>
							<div className="col-span-4">
								<div className="grid grid-rows-2">
									<input
										type="email"
										id="email"
										name="email"
										placehoder="Enter the email"
										className="border-b-4 border-emerald-600 focus:outline-none outline-none pl-2 text-black rounded-sm"
										{...formik.getFieldProps("email")}
										autoComplete="off"
									/>
									{formik.touched.email && formik.errors.email ? (
										<small className="text-red-600">{formik.errors.email}</small>
									) : null}
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-6">
							<label htmlFor="password" className="text-neutral-700 font-medium col-span-2">
								Password
							</label>
							<div className="col-span-4">
								<div className="grid grid-rows-2">
									<input
										type="password"
										id="password"
										name="password"
										placehoder="Enter the user name"
										className="border-b-4 border-emerald-600 focus:outline-none outline-none pl-2 text-black rounded-sm"
										{...formik.getFieldProps("password")}
										autoComplete="off"
									/>
									{formik.touched.password && formik.errors.password ? (
										<small className="text-red-600 max-w-[200px] ">{formik.errors.password}</small>
									) : null}
								</div>
							</div>
						</div>

						<small className="md:w-2/3">
							Password should be atleast 6 characters long and should contain at least one Uppercase
							character, one Lowercase character and one special character
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
							Login
						</button>
					</form>
				</div>
				<hr className="border-l-red-800" />
				<div className="text-center  md:flex md:flex-col md:justify-center md:items-center">
					<div className="h-[2px] w-full md:w-3/4  bg-slate-500"></div>
					<div className="mt-3 md:flex md:flex-col">
						Don't have account
						<button
							className="px-4 bg-blue-500 text-white rounded-md text-lg mt-1 mb-3"
							onClick={() => navigate("/signup")}
						>
							Create Account
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
