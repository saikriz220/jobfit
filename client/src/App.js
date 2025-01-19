import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/Login.jsx';
import Home from './Pages/Home/Home';
import { UserProvider,useUser  } from './UserContext';
import Header from './components/Header/Header.jsx';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public route - Login page */}
          <Route path="/" element={<LoginPage />} />

          {/* Protected route - Home page */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Header />
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { user } = useUser(); // Access user from context
  if (!user) {
    // If no user, redirect to login page
    return <LoginPage />;
  }
  return children; // If user exists, render the child component (HomePage)
};

export default App;
