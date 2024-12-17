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
      const patientList = await axios.get(
        "http://localhost:8083/medical/api/all_patients"
      );
      const emailExists = patientList.data.some(
        (patient) => patient.email === currentUser.email
      );

      console.log("Email Exists:", emailExists); // Log email existence status

      // Step 5: Based on email existence, update the state
      if (emailExists) {
        console.log("Email already exists");
        console.log("Credentials: ", credentials, "Login State", loginState);
      } else {
        const response = await axios.post(
          "http://localhost:8083/medical/api/new_patient",
          currentUser
        );
        console.log("User Created", response.data); // Confirm user creation
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
    const patientList = await axios.get(
      "http://localhost:8083/medical/api/all_patients"
    );
    const userFound = patientList.data.find(
      (patient) => patient.email === loginData.email
    );
    //What to do when user is found
    if (!userFound) {
      alert("User not found");
    } else {
      if (userFound.password != loginData.password) {
        alert(
          "User Credentials incorrect, Please check your email and password"
        );
        console.log(userFound);
      } else {
        console.log("User found:", userFound);
        // Do something with the found user data, e.g., update state
        setUser(userFound);
        setLoginState(true);
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
      const newUserName = `${user.firstName} ${user.lastName}`;
      setUserName(newUserName);
    }
  }, [loginState]); // This effect runs whenever `loginState` changes


  //Post
  useEffect(() => {
    setLoading(true);
    axios
      .post("http://localhost:8083/medical/api/new_patient", patient)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching patient data!", error);
      });
  }, [user]);

  //Get
  // Runs once at the start of the program
  useEffect(() => {
    //Get all patients information
    setLoading(true);
    axios
      .get("http://localhost:8083/medical/api/all_patients")
      .then((response) => {
        setUserList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching patient data!", error);
      });
  }, []);

  return (
    <Router>
      <div>
        <Navigation
          companyName={userName}
          callLogout={handleLogout}
          loginState={loginState}
        />
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
        <Footer />
      </div>
    </Router>
  );
};

export default App;
