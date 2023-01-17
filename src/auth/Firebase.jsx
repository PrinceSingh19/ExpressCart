// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//const analytics = getAnalytics(app);
