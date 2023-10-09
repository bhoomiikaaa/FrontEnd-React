import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import ProductsTable from "./components/ProductsTable";
import ContactUsForm from "./components/ContactUsForm";


const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ProductsTable">Product</Link>
          </li>
          <li>
            <Link to="/ContactUsForm">ContactUs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/ProductsTable" element={<ProductsTable />} />
        <Route path="/ContactUsForm" element={<ContactUsForm />} />
        
      </Routes>
    </Router>
  );
};

export default App;
