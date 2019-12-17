const initialState = {
  test: 0
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case "TEST": {
      return {
        ...state,
        test: action.payload
      };
    }

    default:
      return state;
  }
}
