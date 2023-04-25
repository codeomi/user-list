import { ERROR, LIST_1 } from "./constants";
import axios from "axios";

export const listAction1 = (heading) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/users/req-${heading}`);
    dispatch({ type:LIST_1, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};
