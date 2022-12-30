import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/Home";
import Form from "./components/navbar/Form";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/allProducts/ProductsList";

function App() {
	return (
		<div className="mb-5">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/productsList/:cate" element={<ProductsList />} />
					<Route path="/form" element={<Form />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
