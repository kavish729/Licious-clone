import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);

  

  // const signcheck = (signupform) => {
  //  
  //   console.log(signupform)
  //   
  // };

  // const logindata = (loginform) => {
  //   var signupArr1 = JSON.parse(localStorage.getItem("signup"));
    
  //   for (var i = 0; i < signupArr1.length; i++) {
  //     if (
  //       loginform.email === signupArr1[i].emai &&
  //       loginform.password === signupArr1[i].password
  //     ) {
  //       alert("Login Success !........");

  //       setisAuth(true);
  //     }
  //   }
  // };

  

  return (
    <AuthContext.Provider value={{ isAuth,setisAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
