import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import UserDetail from "./pages/NewDesign/UserDetail";
import UserDrugSchedules from "./pages/NewDesign/UserDrugSchedules";
import UserHealthRecords from "./pages/NewDesign/UserHealthRecords";
import MedicationForm from "./pages/MedicationForm";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null); // Initial state is null
  const [userName, setUserName] = useState(null); //string variable
  const [loginState, setLoginState] = useState(false); // boolean to identify login and logout
  const [credentials, setCredentials] = useState();
  const [emailExists, setEmailExists] = useState(false);
  const [newUser, setNewUser] = useState();

  //TODO: Make API request to get user information
  // Data Seeding to collect user details
  const [userList, setUserList] = useState([
    {
      userId: 1,
      firstName: "Mark",
      lastName: "Kamau",
      condition: "Epilepsy",
      email: "markxkamau@gmail.com",
      credentials: {
        email: "markxkamau@gmail.com",
        password: "a",
        time: new Date(),
      },
    },
    {
      userId: 2,
      firstName: "John",
      lastName: "Doe",
      condition: "asthma",
      email: "johndoe@gmail.com",
      credentials: {
        email: "johndoe@gmail.com",
        password: "s",
        time: new Date(),
      },
    },
  ]);

  const updatedUsers = [
    {
      userId: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      medications: [
        { id: "med1", name: "Aspirin", dosage: "50mg" },
        { id: "med2", name: "Ibuprofen", dosage: "200mg" },
      ], //fetch medication with userId
      drugSchedules: [
        { id: "ds1", time: "08:00 AM", medication: "Aspirin" },
        { id: "ds2", time: "10:00 PM", medication: "Ibuprofen" },
      ], // fetch drug schedule with userId
      healthRecords: [
        { id: "hr1", date: "2024-01-01", notes: "Routine check-up" },
        { id: "hr2", date: "2024-02-15", notes: "Blood pressure check" },
      ], //fetch health records with userId
    },
    {
      userId: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      medications: [
        { id: "med3", name: "Metformin", dosage: "500mg" },
        { id: "med4", name: "Lisinopril", dosage: "10mg" },
      ],
      drugSchedules: [
        { id: "ds3", time: "07:00 AM", medication: "Metformin" },
        { id: "ds4", time: "06:00 PM", medication: "Lisinopril" },
      ],
      healthRecords: [
        { id: "hr3", date: "2024-03-05", notes: "Dental check-up" },
        { id: "hr4", date: "2024-04-10", notes: "Routine blood test" },
      ],
    },
    // Add more user objects as needed
  ];

  const medication = [
    { id: "med1", name: "Aspirin", dosage: "50mg" },
    { id: "med2", name: "Ibuprofen", dosage: "200mg" },
  ];

  const drugSchedules = [
    { id: "ds3", time: "07:00 AM", medication: "Metformin" },
    { id: "ds4", time: "06:00 PM", medication: "Lisinopril" },
  ];

  const healthRecords = [
    { id: "hr3", date: "2024-03-05", notes: "Dental check-up" },
    { id: "hr4", date: "2024-04-10", notes: "Routine blood test" },
  ];

  // Function to handle user creation
  // Happens on Registration
  async function handleRegistration(newUserDetails, credits) {
    // Step 1: Set up the new user and credentials
    setNewUser(newUserDetails);

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
      const response = await axios.post(
        "http://localhost:8083/medical/api/new_patient",
        currentUser
      );
      console.log("User Created", response.data); // Confirm user creation

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
      } else {
        setUserList((prevUserList) => [...prevUserList, currentUser]); // Add user to the list
        setUser(currentUser); // Set the current user state
        setCredentials(currentCredentials); // Save credentials
        setLoginState(true); // Set login state to true
      }
    } catch (error) {
      console.log("Error during registration or email check:", error);
    }
  }
  // Happens on Login
  function handleLogin(loginData) {
    // Iterate over userList and check if the currentUser's email matches any email in userList
    const userFound = userList.find(
      (person) => person.credentials.email === loginData.email
    );
    //What to do when user is found
    if (!userFound) {
      alert("User not found");
    }
    if (userFound.credentials.password != loginData.password) {
      alert("User Credentials incorrect, Please check your email and password");
      console.log(userFound);
    } else {
      console.log("User found:", userFound);
      // Do something with the found user data, e.g., update state
      setUser(userFound);
      setLoginState(true);
    }
  }

  //Happens on click of LogOut
  const handleLogout = () => {
    //TODO : Declare user details of who is logged out, collect time and date etc.
    setLoginState(false);
  };

  // Function to update user name whenever user changes
  useEffect(() => {
    //Whenever a user logs in, change of username
    if (loginState) {
      const newUserName = `${user.firstName} ${user.lastName}`;
      setUserName(newUserName);
    }

    if (newUser) {
      const exists = userList.some((user) => user.email === newUser.email);
      setEmailExists(exists);
      console.log("Updated userList:", userList);
    }
  }, [loginState, user]); // This effect runs whenever `loginState` changes

  useEffect(()=>{},[]);

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
            <Route
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
            </Route>
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
