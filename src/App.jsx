import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/Home";
import Form from "./components/navbar/Form";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/allProducts/ProductsList";
import SingleProduct from "./components/SingleProduct";
import SearchProducts from "./components/search/SearchProducts";
import NavSearch from "./components/search/NavSearch";
import Cart from "./components/cart/Cart";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/form" element={<Form />} />
					<Route path="/productsList/:cate" element={<ProductsList />} />
					<Route path="/singleproduct/:id" element={<SingleProduct />} />
					<Route path="/searchproducts/:query" element={<SearchProducts />} />
					<Route path="/navsearch/:name" element={<NavSearch />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
