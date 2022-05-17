import { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";

export const usePersistedState = (arg1, arg2 = undefined) => {
  // console.log("arg1 ", arg1);
  // console.log("arg2 ", arg2);
  // console.log(
  //   "RESULT",
  //   arg2 || arg2 !== undefined
  //     ? () => JSON.parse(localStorage.getItem(arg1)) || arg2
  //     : arg1
  // );
  const { shouldPersist } = useContext(AppContext);
  // console.log("Values from context: ", shouldPersist);
  // let shouldPersist = true;

  let initialState = arg2;
  if (arg2 !== undefined && shouldPersist) {
    initialState = () => JSON.parse(localStorage.getItem(arg1)) || arg2;
  } else if (arg2 !== undefined && !shouldPersist) {
    initialState = arg2;
  } else if (arg2 === undefined) {
    initialState = arg1;
  }

  const [state, setState] = useState(initialState);
  // const [state, setState] = useState(
  //   arg2 || (shouldPersist && arg2 !== undefined)
  //     ? () => JSON.parse(localStorage.getItem(arg1)) || arg2
  //     : arg1
  // );
  console.log("state ", state);
  useEffect(() => {
    if (shouldPersist && arg2 !== undefined && arg1)
      localStorage.setItem(arg1, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
