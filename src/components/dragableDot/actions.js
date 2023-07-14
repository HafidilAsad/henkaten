// Define the action types
export const UPDATE_POSITION = "UPDATE_POSITION";

// Define the action creator for updating the position
export const updatePosition = (position) => {
  return {
    type: UPDATE_POSITION,
    payload: position,
  };
};
