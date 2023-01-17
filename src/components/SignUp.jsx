import { useFormik } from "formik";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const SignUP = () => {
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className="w-3/4 grid grid-cols-1 md:grid-cols-2 z-10 border-2 h-1/2 mx-auto mt-20  shadow-lg rounded-md">
			<div className="bg-login object-cover w-full hidden md:block"></div>
			<form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-y-4  p-5">
				<h1 className="text-xl font-bold text-emerald-600">Create Account</h1>
				<div className="flex justify-between gap-x-4 text-2xl">
					<button className="rounded-full border-2 border-spacing-4">
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
					/>
				</div>
				<small className="md:w-2/3">
					Password must contain at least eigth characters, including at least 1 letter and 1 number
				</small>

				<button
					type="submit"
					className=" bg-emerald-600 mt-3 text-white font-medium w-1/2 rounded-2xl  py-1"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SignUP;
