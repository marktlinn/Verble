import { createContext, useState } from "react";

const context = createContext();

const ContextProvider = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  return (
    <context.Provider
      value={{ menuActive, setMenuActive, statsActive, setStatsActive }}
    >
      {children}
    </context.Provider>
  );
};

export { ContextProvider, context };
