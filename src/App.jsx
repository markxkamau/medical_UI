import React, { useState } from "react";
import Navigation from "./templates/Navigation";
import Body from "./templates/Body";
import Footer from "./templates/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("register");
  const [userName, setUserName] = useState("Company Name"); // Default logged-in user name

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  // Example function to simulate user login and update the user name
  const handleLogin = (name) => {
    setUserName(name); // Update user name when logged in
    setCurrentPage("home"); // Redirect to home after login
  };


  return (
    <div>
      <Navigation onNavigate={handleNavigation} userName={userName} />

      <main className="flex-grow">
        {currentPage === "home" && <Body page="home" />}
        {currentPage === "login" && <Body page="login" onLogin={handleLogin}  />}
        {currentPage === "logout" && <Body page="logout" />}
        {currentPage === "register" && <Body page="register" onLogin={handleLogin}/>}
        {currentPage === "patient" && <Body page="patient" />}
        {currentPage === "drug" && <Body page="drug" />}
        {currentPage === "data" && <Body page="data" />}
        {currentPage === "test" && <Body page="test" />}
        {currentPage === "stock" && <Body page="stock" />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
