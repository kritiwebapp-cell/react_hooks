import { useContext } from "react";
import UserContext from "./UserContext";

function Result() {
  const name = useContext(UserContext);

  return <h1>Student Name: {name}</h1>;
}

export default Result;



// useContext(UserContext) reads the value provided by UserContext.Provider.

// name becomes "Rahul".

// The component displays the name.