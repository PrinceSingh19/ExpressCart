import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/Home";
import Form from "./components/navbar/Form";
import Navbar from "./components/navbar/Navbar";
//import ProductsList from "./components/allProducts/ProductsList";
import SingleProduct from "./components/SingleProduct";
import SearchProducts from "./components/search/SearchProducts";
import NavSearch from "./components/search/NavSearch";
import Footer from "./components/Footer";
import SignUP from "./components/SignUp";
import Login from "./components/Login";
import { lazy, Suspense } from "react";
import ProductListSkeleton from "./components/allProducts/ProductListSkeleton";

const ProductsList = lazy(() => import("./components/allProducts/ProductsList"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Cart = lazy(() => import("./components/cart/Cart"));

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route
						path="/about"
						element={
							<Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
								<AboutUs />
							</Suspense>
						}
					/>
					<Route path="/form" element={<Form />} />
					<Route
						path="/productsList/:cate"
						element={
							<Suspense fallback={<ProductListSkeleton />}>
								<ProductsList />
							</Suspense>
						}
					/>
					<Route path="/singleproduct/:id" element={<SingleProduct />} />
					<Route path="/searchproducts/:query" element={<SearchProducts />} />
					<Route path="/navsearch/:name" element={<NavSearch />} />
					<Route
						path="/cart"
						element={
							<Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
								<Cart />
							</Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
								<ContactUs />
							</Suspense>
						}
					/>
					<Route path="/signup" element={<SignUP />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
