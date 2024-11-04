import React, { useState } from "react";
import Navigation from "./templates/Navigation";
import Body from "./templates/Body";
import Footer from "./templates/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [userName, setUserName] = useState("Company Name"); // Default logged-in user name

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  // Example function to simulate user login and update the user name
  const handleLogin = (name) => {
    setUserName(name); // Update user name when logged in
    setCurrentPage("home"); // Redirect to home after login
  };

  const handlePageChange = (page) =>{
    setCurrentPage(page);
  }


  return (
    <div>
      <Navigation onNavigate={handleNavigation} userName={userName} />

      <main className="flex-grow">
        {currentPage === "home" && <Body page="home" handlePageChange={handlePageChange}/>}
        {currentPage === "login" && <Body page="login" onLogin={handleLogin} handlePageChange={handlePageChange} />}
        {currentPage === "logout" && <Body page="logout" handlePageChange={handlePageChange}/>}
        {currentPage === "register" && <Body page="register" onLogin={handleLogin} handlePageChange={handlePageChange}/>}
        {currentPage === "patient" && <Body page="patient" handlePageChange={handlePageChange}/>}
        {currentPage === "drug" && <Body page="drug" handlePageChange={handlePageChange}/>}
        {currentPage === "data" && <Body page="data" handlePageChange={handlePageChange}/>}
        {currentPage === "test" && <Body page="test" handlePageChange={handlePageChange}/>}
        {currentPage === "stock" && <Body page="stock" handlePageChange={handlePageChange}/>}
      </main>

      <Footer />
    </div>
  );
};

export default App;
