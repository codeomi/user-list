import { ERROR, LIST_1, LIST_2, LIST_3, LIST_4, LIST_5 } from "./constants";
import axios from "axios";

export const listAction1 = (heading) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/users/req-${heading}`);
    dispatch({ type: LIST_1, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};
// export const listAction12 = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get("/api/v1/users/req-2");
//     dispatch({ type: LIST_1, payload: data });
//   } catch (error) {
//     dispatch({ type: ERROR, payload: error.message });
//   }
// };
// export const listAction3= () => async (dispatch) => {
//   try {
//     const { data } = await axios.get("/api/v1/users/req-3");
//     dispatch({ type: LIST_1, payload: data });
//   } catch (error) {
//     dispatch({ type: ERROR, payload: error.message });
//   }
// };
