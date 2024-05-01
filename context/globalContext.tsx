"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  username: "",
  setUsername: (): string => "",
});

export const GlobalContextProvider = ({ children }: any) => {
  const [username, setUsername] = useState("");

  return (
    <GlobalContext.Provider value={{ username, setUsername }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
