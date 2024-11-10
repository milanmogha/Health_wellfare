import { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  // Retrieve token from localStorage
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Function to store token in both state and localStorage
  const StoreToken = (token) => {
    setToken(token); // Update state
    localStorage.setItem("token", token); // Persist token in localStorage
  };
  console.log("Token in AuthProvider:", token);
  // Check if token exists, meaning user is logged in
  const isLoggedIn = !!token;

  // Logout function to clear token
  const LogoutUser = () => {
    setToken(""); // Clear token in state
    localStorage.removeItem("token"); // Remove token from localStorage
    console.log("Token removed");
  };


  // Provide state and functions to the rest of the app
  return (
    <Authcontext.Provider value={{ isLoggedIn, StoreToken, LogoutUser }}>
      {children}
    </Authcontext.Provider>
  );
};


// Custom hook to use the auth context
export const useAuth = () => {
  const authValue = useContext(Authcontext);
  if (!authValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authValue;
};
