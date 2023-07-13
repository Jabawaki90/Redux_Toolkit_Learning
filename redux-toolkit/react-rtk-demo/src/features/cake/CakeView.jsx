import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restock } from "./cakeSlice";

const CakeView = () => {
  const [value, setValue] = useState(1);
  const numbOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{`Number of cakes ${numbOfCakes}`}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restock(value))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
