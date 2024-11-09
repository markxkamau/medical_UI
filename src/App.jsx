import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  const [userName, setUserName] = useState("Company Name"); // Default logged-in user name

  const handleLogin = (name) => {
    setUserName(name); // Update user name when logged in
  };

  return (
    <Router>
      <div>
        <Navigation userName={userName} />
        <main>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/login"
              element = { <LoginPage onLogin={handleLogin} />}
            />
            {/* <Route path="/logout" component={LogoutPage} /> */}
            <Route
              path="/register"
              element={<RegisterPage onLogin={handleLogin} />}
            />
            <Route path="/dashboard" element={<UserDashboard />} />
            {/* <Route path="/drug" element={DrugPage} /> */}
            {/* <Route path="/data" element={DataPage} /> */}
            {/* <Route path="/test" element={TestPage} /> */}
            {/* <Route path="/stock"element={StockPage} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
