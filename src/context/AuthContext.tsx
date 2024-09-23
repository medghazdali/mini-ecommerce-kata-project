import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the user object
interface User {
  id: number;
  username: string;
  email: string;
}

// Define the context type
interface AuthContextType {
  user: User | null;
  attemptLogin: (newUser: User) => void;
  logout: () => void;
}

// Create the context with a default value of `null`
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const userData = localStorage.getItem('user');

  const [user, setUser] = useState<User | null>(userData ? JSON.parse(userData) : null);

  const attemptLogin = (newUser: User) => {
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, attemptLogin, logout }}>{children}</AuthContext.Provider>;
};
