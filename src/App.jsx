import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomeProducts from "./components/HomeProducts";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

function App() {
	return (
		<div className="mb-5">
			<BrowserRouter>
				<Navbar />
				<Slider />
				<HomeProducts />
			</BrowserRouter>
		</div>
	);
}

export default App;
