import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/Home";
import Form from "./components/navbar/Form";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/allProducts/ProductsList";
import SingleProduct from "./components/SingleProduct";
import MobileFilters from "./components/allProducts/MobileFilters";
import Brand from "./components/allProducts/mobileFilters/Pages/Brand";
import Rating from "./components/allProducts/mobileFilters/Pages/Rating";
import FilterPage from "./components/allProducts/mobileFilters/FilterPage";
import SearchProducts from "./components/search/SearchProducts";
import NavSearch from "./components/search/NavSearch";
import Cart from "./components/Cart";

function App() {
	return (
		<div className="mb-5">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/form" element={<Form />} />
					<Route path="/productsList/:cate" element={<ProductsList />} />
					<Route path="/singleproduct/:id" element={<SingleProduct />} />
					<Route path="/filters" element={<MobileFilters />}>
						<Route path="brand" index element={<Brand />} />
						<Route path="rating" element={<Rating />} />
					</Route>
					<Route path="/searchproducts/:query" element={<SearchProducts />} />
					<Route path="/navsearch/:name" element={<NavSearch />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
