import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import axios from "axios";
import { createPatient, fetchPatients } from "./services/apiService";

const App = () => {
  const [user, setUser] = useState(null); // Initial state is null
  const [userName, setUserName] = useState(null); //string variable
  const [loginState, setLoginState] = useState(false); // boolean to identify login and logout
  const [credentials, setCredentials] = useState();
  const [emailExists, setEmailExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState({});
  const [userList, setUserList] = useState([]);
  const [data, setData] = useState({});

  // Function to handle user creation
  // Happens on Registration
  async function handleRegistration(newUserDetails, credits) {
    // Step 1: Set up the new user and credentials

    let currentCredentials = {
      email: credits.email,
      password: credits.password,
      time: credits.time,
    };

    // Step 2: Create the current user object for consistent backend structure
    let currentUser = {
      firstName: newUserDetails.firstName,
      lastName: newUserDetails.lastName,
      condition: newUserDetails.condition,
      email: newUserDetails.email,
      password: currentCredentials.password,
      dateTime: currentCredentials.time,
    };

    // Step 3: Make POST request to backend to create the new user
    try {
      // Step 4: Check if email already exists
      const emailExists = userList.some(
        (patient) => patient.email === currentUser.email
      );

      // Step 5: Based on email existence, update the state
      if (emailExists) {
        console.log("Email already exists");
        setPatient(currentUser); // Set the current user state
      } else {
        setPatient(currentUser);
        setUser(currentUser); // Set the current user state

        setCredentials(currentCredentials); // Save credentials
        setLoginState(true); // Set login state to true
      }
    } catch (error) {
      console.log("Error during registration or email check:", error);
    }
  }
  // Happens on Login
  async function handleLogin(loginData) {
    // Iterate over userList and check if the currentUser's email matches any email in userList
    const userFound = userList.some(
      (patient) => patient.email === loginData.email
    );
    //What to do when user is found
    if (!userFound) {
      alert("User not found");
    } else {
      const user = userList.find(
        (patient) => patient.email === loginData.email
      );
      if (user.password !== loginData.password) {
        alert(
          "User Credentials incorrect, Please check your email and password"
        );
      } else {
        // Do something with the found user data, e.g., update state
        setLoginState(true);
        setPatient(user);
        setUser(user);
      }
    }
  }

  //Happens on click of LogOut
  const handleLogout = () => {
    //TODO : Declare user details of who is logged out, collect time and date etc.
    setLoginState(false);
  };

  // Function to update user name whenever user logs
  useEffect(() => {
    //Whenever a user logs in
    if (loginState) {
      const newUserName =
        user.firstName && user.lastName
          ? `${user.firstName} ${user.lastName}`
          : user.name;
      setUserName(newUserName);
    }
  }, [loginState]); // This effect runs whenever `loginState` changes

  //Post
  useEffect(() => {
    setLoading(true);
    if (Object.keys(patient).length !== 0) {
      // Ensures you don't send an empty object
      createPatient(patient);
      setLoading(false);
    }
  }, [user]);

  //Get
  // Runs once at the start of the program
  useEffect(() => {
    setLoading(true);

    const getPatients = async () => {
      try {
        const users = await fetchPatients();
        setUserList(users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getPatients()
  }, [loginState]);

  return (
    <Router>
      <div>
        <Navigation
          companyName={userName}
          callLogout={handleLogout}
          loginState={loginState}
        />
        {loading ? (
          "Loading ..."
        ) : (
          <main>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route
                path="/login"
                element={<LoginPage onLogin={handleLogin} />}
              />
              <Route
                path="/register"
                element={<RegisterPage onLogin={handleRegistration} />}
              />
              <Route
                path="/dashboard"
                element={
                  user && loginState ? (
                    <UserDashboard patientInfo={user} />
                  ) : (
                    <Navigate to="/" /> // Redirect to home-page
                  )
                }
              />
              {/* <Route
              path="/user/:userId"
              element={<UserDetail users={updatedUsers} />}
            >
              <Route
                path="medications"
                element={<MedicationForm users={updatedUsers} />}
              />
              <Route
                path="drug-schedules"
                element={<UserDrugSchedules users={updatedUsers} />}
              />
              <Route
                path="health-records"
                element={<UserHealthRecords users={updatedUsers} />}
              />
            </Route> */}
              {/* <Route path="/form/register" element={<RegistrationForm/>}/>
            <Route path="/form/user" element={<UserProfilePage user={user}/>}/>
            <Route path="/form/medication" element={<AddMedicationForm/> }/>
            <Route path="/form/record" element={<AddHealthRecordForm/> }/> */}
            </Routes>
          </main>
        )}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
