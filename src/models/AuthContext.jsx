// App.js
import { createContext, useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const AuthContext = createContext(null);

export function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Centralized user list - in real app, this would be in your backend
  const userList = [
    {
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      condition: "Diabetes",
      password: "hello",
    },
  ];

  // Centralized authentication logic
  const handleLogin = async (credentials) => {
    try {
      // In a real app, this would be an API call
      const user = userList.find(
        (person) =>
          person.email === credentials.email &&
          person.password === credentials.password
      );

      if (user) {
        // Remove sensitive data before storing
        const { password, ...safeUserData } = user;
        setCurrentUser(safeUserData);
        localStorage.setItem("user", JSON.stringify(safeUserData));
        return { success: true };
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  // Check for existing session on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, handleLogin, handleLogout, error }}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* other routes */}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

// Login.js
const Login = () => {
  const { handleLogin, error } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleLogin(formData);
    if (result.success) {
      navigate("/dashboard");
    }
  };

  return <form onSubmit={onSubmit}>{/* form fields */}</form>;
};

// Dashboard.js
const Dashboard = () => {
  const { currentUser, handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome {currentUser.name}</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* dashboard content */}
    </div>
  );
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
