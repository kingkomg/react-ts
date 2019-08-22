import {Constants} from "../Constants";

const counterReducer = (counter: number = 0, action: { type: string }): number => {
  switch (action.type) {
    case Constants.INCREMENT:
      return counter + 1;
    case Constants.DECREMENT:
      return counter - 1;
    default:
      return counter;
  }
};

export default counterReducer;
