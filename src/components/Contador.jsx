import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { addNumber, subNumber } from "../store/modules/counter/actions";

const Contador = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter);

  return (
    <div>
      <p>{number}</p>
      <button onClick={() => dispatch(addNumber())}>ADD</button>
      <button onClick={() => dispatch(subNumber())}>SUB</button>
    </div>
  );
};

export default Contador;
