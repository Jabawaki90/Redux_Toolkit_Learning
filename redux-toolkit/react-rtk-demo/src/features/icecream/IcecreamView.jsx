import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restock } from "./icecreamSlice";

const IcecreamView = () => {
  const numbOfIcecream = useSelector((state) => state.iceCream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{`Number of ice creams ${numbOfIcecream}`}</h2>
      <button onClick={()=>dispatch(ordered())}>Order ice cream</button>
      <button onClick={()=>dispatch(restock(60))}>Restock ice creams</button>
    </div>
  );
};

export default IcecreamView;
