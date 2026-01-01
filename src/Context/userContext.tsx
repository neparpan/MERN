import React, { createContext, useState, ReactNode } from "react";

// 1. Define the shape of the user data
interface UserData {
  fullName: string;
  email: string;
  profilePic?: string | File | null;
}

// 2. Define the shape of the context
interface UserContextType {
  user: UserData | null;
  updateUser: (userData: UserData) => void;
  clearUser: () => void;
}

// 3. Create the context with a default value
export const UserContext = createContext<UserContextType | undefined>(undefined);

// 4. Create the Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  // Function to update the user data
  const updateUser = (userData: UserData) => {
    setUser(userData);
  };

  // Function to clear user data (e.g., on logout)
  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};