import {Constants} from "../Constants";

const inputReducer = (value: string = '', action: { type: string, payload: string }): string => {
  switch (action.type) {
    case Constants.CHANGE_NAME:
      return action.payload;
    case Constants.CHANGE_PASSWORD:
      return action.payload;
    default:
      return value;
  }
};

export default inputReducer;
