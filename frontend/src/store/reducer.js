import {ERROR, LIST_1} from "./constants"

export const initialReducer = (
    state = { list: {} },
    action
  ) => {
    switch (action.type) {
      case LIST_1:
    return {
      ...state,
      list:action.payload.users.users
    }

    case ERROR :
      return{
        ...state,
        error:action.payload
      }
  
      default:
        return state;
    }
  };