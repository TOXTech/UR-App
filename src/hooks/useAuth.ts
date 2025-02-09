import { useState } from 'react';
import { loginUser, signupUser } from '../services/appwrite/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      await loginUser(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      await signupUser(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isAuthenticated,
    login,
    signup,
  };
};