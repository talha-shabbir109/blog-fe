import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./assets/scss/index.css";
import "./App.css";
import AdminLayout from "./admin/layouts/AdminLayout";

import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Author from "./pages/Author";
import ContactUs from "./pages/ContactUs";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import AllPostPage from "./admin/pages/AllPostPage";
import Dashboard from "./admin/pages/Dashboard";
import CategoryPage from "./admin/pages/CategoryPage";
import NewCategoryPage from "./admin/pages/NewCategoryPage.jsx";
import NewPostPage from "./admin/pages/NewPostPage.jsx";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkAuthToken = () => {
		const token = sessionStorage.getItem("authToken");
		return token ? true : false;
	};

	useEffect(() => {
		setIsAuthenticated(checkAuthToken());
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Index />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-post/:postId" element={<BlogPost />} />
				<Route path="/author" element={<Author />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />

				{/* Admin Routes with Nested Layout */}
				<Route
					path="/admin"
					element={
						isAuthenticated ? <AdminLayout /> : <Navigate to="/sign-in" />
					}
				>
					<Route index element={<Dashboard />} />
					<Route path="posts" element={<AllPostPage />} />
					<Route path="posts/new" element={<NewPostPage />} />
					{/* Updated categories route */}
					<Route path="categories" element={<CategoryPage />} />
					<Route path="categories/new" element={<NewCategoryPage />} />
				</Route>

				{/* Catch-all Route */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
