import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import { createPatient, fetchPatients, loginUser } from "./services/apiService";

const App = () => {
  const [user, setUser] = useState(null); // Initial state is null
  const [userName, setUserName] = useState(null); //string variable
  const [loginState, setLoginState] = useState(false); // boolean to identify login and logout
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState({});
  const [userList, setUserList] = useState([]);

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
      email: newUserDetails.email,
      condition: newUserDetails.condition,
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
      } else {
        // Both setPatient and setUser are used for different purposes
        // *setPatient is used to send data to the backend and update the database
        setPatient(currentUser);
        //*setUser is used to update the state allowing access to the dashboard
        setUser(currentUser);
        setLoginState(true);
      }
    } catch (error) {
      console.log("Error during registration or email check:", error);
    }
  }
  // Happens on Login
  async function handleLogin(loginData) {
    // Step 1: Make a POST request to the backend to check if the user exists and collecting their details if they do
    setLoading(true);
    const currentUser = await loginUser(loginData);

    // Step 2: Confirm if there are details returned
    currentUser
      ? (() => {
          // Step 3: Set the user state to true and update the user details
          setUser(currentUser);
          setLoginState(true);
          setLoading(false);
        })()
      : console.log("Login Failed: Invalid Credentials");

    /**async function handleLogin(loginData) {
      try {
        const response = await loginUser(loginData); // Make API call to login
        if (response.token) {
          // Store the token in an HTTP-only cookie or local storage
          localStorage.setItem("authToken", response.token); // Or use cookies for added security

          // You can also set user data directly here or fetch it once after login if needed
          setUser(response.user);
          setLoginState(true);
        } else {
          console.log("Login failed: Invalid credentials");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }*/
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
  }, [loginState, user]); // This effect runs whenever `loginState` and `user` changes
  //Post
  useEffect(() => {
    if (Object.keys(patient).length !== 0) {
      setLoading(true);
      createPatient(patient)
        .then(() => setLoading(false))
        .catch((error) => {
          console.error("Error creating patient:", error);
          setLoading(false);
        });
    }
  }, [patient]);
  //Get
  // Runs once at the start of the program and on change of loginState
  useEffect(() => {
    if (loginState) {
      setLoading(true);
      const getPatients = async () => {
        try {
          const users = await fetchPatients();
          setUserList(users);
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);
        }
      };
      getPatients();
    }
  }, [loginState]); // Only fetch when login state changes

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
                    <Navigate to="/login" />
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
