import React, { useEffect } from "react";
import { withRedux } from "../redux/redux";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase/index";

const Home = () => {
  const data = useSelector(state => state.testReducer.test);
  const dispatch = useDispatch();
  const addTestNumber = () => {
    console.log(data);
    dispatch({ type: "TEST", payload: +5 });
  };

  useEffect(() => {
    db.ref("users").once("value", snap => console.log(snap.val()));
  }, []);

  return (
    <div>
      Hello Redux World<button onClick={addTestNumber}>Add</button>
    </div>
  );
};

export default withRedux(Home);
