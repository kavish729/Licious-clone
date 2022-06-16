import { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [cdata, setcdata] = useState([]);

  const handleadddata = (prod) => {
    setcdata([...cdata, { prod }]);
  };

  const handledeldata = (prod) => {
    let newdata = cdata.filter((item) => {
      return item.id !== prod.id;
    });
    setcdata(newdata);
    
    
  };

  console.log(cdata)
  return (
    <CountContext.Provider value={{ cdata, handleadddata, handledeldata }}>
      {children}
    </CountContext.Provider>
  );
};
