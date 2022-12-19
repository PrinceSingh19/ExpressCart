import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Slider />
			</BrowserRouter>
		</div>
	);
}

export default App;
