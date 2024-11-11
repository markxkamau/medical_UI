import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import Design from "./models/Design";

const App = () => {
  const [user, setUser] = useState(null);  // Initial state is null
  const [userName, setUserName] = useState('Company Name');

  // Function to handle user creation
  function createUser(newUser) {
    const currentUser = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      condition: newUser.condition,
      email: newUser.email,
      password: newUser.password,
    };
    setUser(currentUser);  // Set user to state
  }

  // Function to update user name whenever user changes
  useEffect(() => {
    if (user) {
      const newUserName = `${user.firstName} ${user.lastName}`;
      setUserName(newUserName);
    }
  }, [user]);  // This effect runs whenever `user` changes

  return (
    <Router>
      <div>
        <Navigation companyName={userName} />
        <main>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/login"
              element={<LoginPage onLogin={user} />}
            />
            {/* <Route path="/logout" component={LogoutPage} /> */}
            <Route
              path="/register"
              element={<RegisterPage onLogin={createUser} />}
            />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/testdashboard" element={<Design />} />
            <Route path="/schedule" element={<UserDashboard />} />
            <Route path="/drugStock" element={<UserDashboard />} />
            <Route path="/newDrug" element={<UserDashboard />} />
            <Route path="/editDrug" element={<UserDashboard />} />
            <Route path="/deleteDrug" element={<UserDashboard />} />
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
