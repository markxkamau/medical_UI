import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  const [user, setUser] = useState(null); // Initial state is null
  const [userName, setUserName] = useState(null); //string variable
  const [loginState, setLoginState] = useState(false); // boolean to identify login and logout

  //TODO: Make API request to get user information
  // Data Seeding to collect user details
  const [userList, setUserList] = useState([
    {
      firstName: "Mark",
      lastName: "Kamau",
      condition: "Epilepsy",
      email: "markxkamau@gmail.com",
      password: "a",
    },
    {
      firstName: "John",
      lastName: "Doe",
      condition: "asthma",
      email: "johndoe@gmail.com",
      password: "s",
    },
  ]);
  // Function to handle user creation
  // Happens on Registration
  function handleRegistration(newUser) {
    //Altering newUser to a consistent structure for better/ easier backend understanding
    let currentUser = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      condition: newUser.condition,
      email: newUser.email,
      password: newUser.password,
    };

    //TODO: Connect to backend i.e. POST request to add new USER

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
      setUser(currentUser); // Set user to state
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
            {/* <Route path="/dashboard" element={<Dashboard />} />; */}
            {/* <Route path="/users" element={<UserList />} />; */}
            {/* <Route path="/user/:userId" element={<UserDetail />} />; */}
            {/* <Route path="/createUser" element={<CreateUser />} />; */}
            {/* <Route path="/user/:userId" element={<UserDetail />}> */}
            {/* <Route path="medications" element={<UserMedications />} /> */}
            {/* <Route path="drug-schedules" element={<UserDrugSchedules />} /> */}
            {/* <Route path="health-records" element={<UserHealthRecords />} /> */}
            {/* </Route> */}
            {/* <Route path="/medications" element={<MedicationList />} />; */}
            {/* <Route */}
            {/* path="/medication/:medicationId" */}
            {/* element={<MedicationDetail />} */}
            {/* /> */}
            {/* <Route path="/createMedication" element={<CreateMedication />} />; */}
            {/* <Route
              path="/updateMedication/:medicationId"
              element={<UpdateMedication />}
            /> */}
            {/* <Route path="/drug-schedules" element={<DrugScheduleList />} />; */}
            {/* <Route
              path="/drug-schedule/:scheduleId"
              element={<DrugScheduleDetail />}
            /> */}
            {/* <Route
              path="/createDrugSchedule"
              element={<CreateDrugSchedule />}
            /> */}
            {/* <Route
              path="/updateDrugSchedule/:scheduleId"
              element={<UpdateDrugSchedule />}
            /> */}
            {/* <Route path="/drug-stocks" element={<DrugStockList />} />; */}
            {/* <Route path="/drug-stock/:stockId" element={<DrugStockDetail />} />; */}
            {/* <Route path="/createDrugStock" element={<CreateDrugStock />} />; */}
            {/* <Route path="/health-records" element={<HealthRecordList />} />; */}
            {/* <Route
              path="/health-record/:userId"
              element={<HealthRecordDetail />}
            /> */}
            {/* <Route
              path="/createHealthRecord"
              element={<CreateHealthRecord />}
            /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
