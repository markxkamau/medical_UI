import { useState, useEffect } from 'react';
import { fetchPatient, loginUser, createPatient } from '../services/userService';

const useUser = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(null);
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchPatient();
        setUserList(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

  const handleLogin = (loginData) => {
    const result = loginUser(userList, loginData);
    if (result.error) {
      return { error: result.error };
    }
    setLoginState(true);
    setUser(result.user);
    return { user: result.user };
  };

  const handleRegistration = async (userData) => {
    try {
      const createdUser = await createPatient(userData);
      setUser(createdUser);
      setLoginState(true);
    } catch (error) {
      return { error: "Registration failed" };
    }
  };

  return { userList, user, loginState, handleLogin, handleRegistration };
};

export default useUser;
