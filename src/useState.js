import { Button } from "bootstrap";
import React, { useState } from "react";

const Term = () => {
  const [state, setState] = useState(0);

  const increase = () => {
    setState(state + 1);
  };
  return (
    <div>
      <h1>{state}</h1> <button onClick={increase}>submit</button>
    </div>
  );
};

export const Rem = () => {
  const [state, setState] = useState("john");

  const increase = () => {
    if (state === "john") {
      setState("mary");
    } else {
      setState("john");
    }
  };
  return (
    <div>
      <h1>{state}</h1>; <button onClick={increase}>submit</button>
    </div>
  );
};

export default Term;

export const Em = () => {
  const [state, setState] = useState("john");

  const increase = () => {
    if (state === "john") {
      setState("ijeoma");
    } else {
      setState("john");
    }
  };
  return (
    <div>
      <h2>{state}</h2>; <button onClick={increase}>submit</button>
    </div>
  );
};
