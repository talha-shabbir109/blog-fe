import "./assets/scss/index.css";
import "./App.css";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Author from "./pages/Author";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-post" element={<BlogPost />} />
				<Route path="/author" element={<Author />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
