import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB32m5AHDDBbeAuN6PbV_mEVCi119B85zs",
	authDomain: "expresscart-d3791.firebaseapp.com",
	projectId: "expresscart-d3791",
	storageBucket: "expresscart-d3791.appspot.com",
	messagingSenderId: "1079437676716",
	appId: "1:1079437676716:web:dca3eb3bba214cfd0e8f09",
	measurementId: "G-1N49GXDYRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const handleGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;

			// ...
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage);
		});
};
