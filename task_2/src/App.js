import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
