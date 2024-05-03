import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the UserInfo interface
interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  user_id: string;
}

// Define the ContextProps interface
interface ContextProps {
  userInfo: UserInfo;
  setUserInfo: (key: string, value: string | number) => void;
}

// Create the context
// const GlobalContext = createContext<ContextProps | undefined>(undefined);

const GlobalContext = createContext<ContextProps>({
  userInfo: {
    email: "",
    firstName: "",
    lastName: "",
    user_id: "",
  },
  setUserInfo: () => {},
});
// Create the provider component
export const GlobalContextProvider = ({ children }: any) => {
  const [userInfo, setUserInfoState] = useState<UserInfo>({
    email: "",
    firstName: "",
    lastName: "",
    user_id: "",
  });
  const setUserInfo: ContextProps["setUserInfo"] = (key, value) => {
    setUserInfoState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
