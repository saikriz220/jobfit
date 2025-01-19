// src/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state for user

  const login = (userName, userType) => {
    setUser({ userName, userType }); // Simulating user login
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};  

// Custom hook to access the user context
export const useUser = () => useContext(UserContext);
