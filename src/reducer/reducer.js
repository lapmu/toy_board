import dummyData from "../data/dummyData";
import {
  ADDGUEST_WRITE,
  ADDGUEST_DRAW,
  ADDPOST,
  DELETEGUEST,
  DELETEPOST,
} from "../action/action";

export const reducer = (state = dummyData, action) => {
  const copy = { ...state };
  switch (action.type) {
    case ADDGUEST_WRITE:
      copy.guest = [action.payload, ...copy.guest];
      return copy;

    case ADDGUEST_DRAW:
      copy.guest = [action.payload, ...copy.guest];
      return copy;

    case ADDPOST:
      copy.post = [action.payload, ...copy.post];
      return copy;

    case DELETEGUEST:
      copy.guest = copy.guest.filter((el, idx) => idx !== action.payload);
      return copy;

    case DELETEPOST:
      copy.post = copy.post.filter((el, idx) => idx !== action.payload);
      return copy;

    default:
      return state;
  }
};
