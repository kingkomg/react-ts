import {DECREMENT, INCREMENT} from "../Constants";

const counterReducer = (counter: number = 0, action: { type: string }): number => {
  switch (action.type) {
    case INCREMENT:
      return counter + 1;
    case DECREMENT:
      return counter - 1;
    default:
      return counter;
  }
};

export default counterReducer;
