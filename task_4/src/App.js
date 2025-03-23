import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import "./styles.css";
import BlogDetail from "./pages/BlogDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<CategoryPage />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
        </Router>
    );
}

export default App;