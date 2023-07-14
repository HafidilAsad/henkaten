import { UPDATE_POSITION } from "./actions";

// Define the initial state
const initialState = {
  position: { x: 0, y: 0 },
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
