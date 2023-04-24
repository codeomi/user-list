import {INITIAL} from "./constants"

export const initialReducer = (
    state = { language: "javascript", success: false },
    action
  ) => {
    switch (action.type) {
      case INITIAL:
    return {}
  
      default:
        return state;
    }
  };