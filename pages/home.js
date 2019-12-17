import { withRedux } from "../redux/redux";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const data = useSelector(state => state.testReducer.test);
  const dispatch = useDispatch();
  const addTestNumber = () => {
    console.log(data);
    dispatch({ type: "TEST", payload: +5 });
  };

  console.log(data);

  return (
    <div>
      Hello Redux World<button onClick={addTestNumber}>Add</button>
    </div>
  );
};

export default withRedux(Home);
