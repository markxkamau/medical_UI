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
import UserMedication from "./pages/NewDesign/UserMedication";
import UserDrugSchedules from "./pages/NewDesign/UserDrugSchedules";
import UserHealthRecords from "./pages/NewDesign/UserHealthRecords";

const App = () => {
  const [user, setUser] = useState(null); // Initial state is null
  const [userName, setUserName] = useState(null); //string variable
  const [loginState, setLoginState] = useState(false); // boolean to identify login and logout

  //TODO: Make API request to get user information
  // Data Seeding to collect user details
  const [userList, setUserList] = useState([
    {
      userId: 1,
      firstName: "Mark",
      lastName: "Kamau",
      condition: "Epilepsy",
      email: "markxkamau@gmail.com",
      password: "a",
    },
    {
      userId: 2,
      firstName: "John",
      lastName: "Doe",
      condition: "asthma",
      email: "johndoe@gmail.com",
      password: "s",
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
  function handleRegistration(newUser) {
    //Altering newUser to a consistent structure for better/easier backend understanding
    let currentUser = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      condition: newUser.condition,
      email: newUser.email,
      password: newUser.password,
    };

    //TODO: Connect to backend i.e. POST request to add new USER
    //saveNew(currentUser);

    //Checking if email exists
    //Requires a GET request to crosscheck all other emails
    const emailExists = userList.some((user) => user.email === newUser.email);

    if (emailExists) {
      console.log("Email already exists");
    } else {
      setUserList(
        (prevUserList) => [...prevUserList, newUser],
        () => {
          // Access the updated userList here
          console.log("Updated userList:", userList);
        }
      );
      setUser(currentUser); // Set user to current usestate
      setLoginState(true);
    }
  }

  // Happens on Login
  function handleLogin(loginData) {
    // Iterate over userList and check if the currentUser's email matches any email in userList
    const userFound = userList.find(
      (person) =>
        person.email === loginData.email &&
        person.password === loginData.password
    );
    //What to do when user is found
    if (userFound) {
      console.log("User found:", userFound);
      // Do something with the found user data, e.g., update state
      setUser(userFound);
      setLoginState(true);
    } else {
      alert("User not found");
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
  }, [loginState, user]); // This effect runs whenever `loginState` changes

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
                element={<UserMedication users={updatedUsers} />}
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
