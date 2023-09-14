import axios from "axios";

export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_TO_SPANISH = "CHANGE_TO_SPANISH";
export const CHANGE_TO_ENGLISH = "CHANGE_TO_ENGLISH";
export const SEND_EMAIL = "SEND_EMAIL";
export const CLEAR_AUX = "CLEAR_AUX";

export function changeMode() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: CHANGE_MODE,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function changeToSpanish() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: CHANGE_TO_SPANISH,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function changeToEnglish() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: CHANGE_TO_ENGLISH,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function sendEmail(name, lastName, email, message) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/portfolio/email",
        { name, lastName, email, message }
      );
      return dispatch({
        type: SEND_EMAIL,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function clearAux() {
  //para limpiar AuxState al desmontar el detail
  return {
    type: CLEAR_AUX,
  };
}
