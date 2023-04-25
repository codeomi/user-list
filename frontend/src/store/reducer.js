import { ERROR, LIST_1 } from "./constants";

export const initialReducer = (state = { list: {}, list2: {} }, action) => {
  switch (action.type) {
    case LIST_1:
      return {
        ...state,
        list: action.payload.users,
        success: action.payload.success,
        responses: action.payload.responses,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
