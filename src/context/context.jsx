import { createContext, useState } from "react";

// create the context
export const AppContext = createContext();

// make your provider

export const AppProvider = ({ children }) => {
  const [hello, setHello] = useState("Hello");
  return (
    <AppContext.Provider
      value={{
        hello,
        setHello,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};