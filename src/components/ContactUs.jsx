import React from "react";

const ContactUs = () => {
	return (
		<div className="">
			<h1 className="text-xl font-semibold text-center mb-4">Contact & Sumbit Query</h1>
			<div className="flex justify-center">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.479063122931!2d72.81468081423989!3d19.434901545644745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a7633b4223%3A0x43a05328d9dd4463!2sAvdhut%20Apartment!5e0!3m2!1sen!2sin!4v1673612152795!5m2!1sen!2sin"
					className="w-3/4 h-[450px]"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div className="container mt-8">
				<form
					action="https://formspree.io/f/xnqyqekw"
					method="POST"
					className="flex flex-col space-y-8 items-center"
				>
					<input
						type="text"
						placeholder="Enter name"
						name="name"
						className="border-2 pl-2 h-8 md:w-1/3 border-blue-400 shadow-md drop-shadow-sm shadow-slate-300"
						required
						autoComplete="off"
					/>
					<input
						type="email"
						className="border-2 pl-2 h-8 md:w-1/3 border-blue-400 shadow-md drop-shadow-sm shadow-slate-300"
						placeholder="Enter email"
						name="Email"
						required
						autoComplete="off"
					/>

					<textarea
						name="Message"
						cols="24"
						rows="4"
						required
						className="border-2 pl-2  md:w-1/3 border-blue-400 shadow-md drop-shadow-sm shadow-slate-300"
						autoComplete="off"
						placeholder="Enter Your Message"
					></textarea>
					<button type="sumbit" className="bg-purple-500 w-36 text-white rounded-sm px-4 py-2">
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
