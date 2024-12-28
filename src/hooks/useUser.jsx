import { useState, useEffect } from 'react';
import { fetchUsers, loginUser, createUser } from '../services/userService';

const useUser = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(null);
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
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
      const createdUser = await createUser(userData);
      setUser(createdUser);
      setLoginState(true);
    } catch (error) {
      return { error: "Registration failed" };
    }
  };

  return { userList, user, loginState, handleLogin, handleRegistration };
};

// export default useUser;

import { useState, useEffect } from 'react';
import useUser from '../hooks/useUser';

const MyComponent = () => {
  const { user, loginState, handleLogin, handleRegistration } = useUser();
  const [userName, setUserName] = useState('');

  // Update userName when loginState or user changes
  useEffect(() => {
    if (loginState) {
      const newUserName = user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : user.name || "Unknown User";
      setUserName(newUserName);
    }
  }, [loginState, user]);

  return (
    <div>
      <h1>Welcome, {userName}</h1>
      <button onClick={() => handleLogin({ email: 'john.doe@example.com', password: 'password123' })}>
        Login as John Doe
      </button>
      <button onClick={() => handleRegistration({ firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', password: 'password123' })}>
        Register as Jane Doe
      </button>
    </div>
  );
};

export default MyComponent;

