import React from "react";
// default context object with properties corresponding to Provider values

const AlertContext = React.createContext({
  display: false,
  msg: "default value",
  theme: "",
  onClick: () => undefined 
});

//short hand 

export default AlertContext;
