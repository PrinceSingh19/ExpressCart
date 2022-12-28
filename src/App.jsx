import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import HomeProducts from "./components/HomeProducts";
import Form from "./components/navbar/Form";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/slider/Slider";

function App() {
	return (
		<div className="mb-5">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/productsList/:category" element={<ProductsList />} />
					<Route path="/form" element={<Form />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
