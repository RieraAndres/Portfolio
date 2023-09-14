import {
  CHANGE_MODE,
  CHANGE_TO_ENGLISH,
  CHANGE_TO_SPANISH,
  CLEAR_AUX,
  SEND_EMAIL,
} from "./Actions";

let initialState = {
  dark: false,
  english: false,
  auxState: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE:
      if (state.dark === false) {
        return {
          ...state,
          dark: true,
        };
      } else {
        return {
          ...state,
          dark: false,
        };
      }
    case CHANGE_TO_ENGLISH: {
      return {
        ...state,
        english: true,
      };
    }
    case CHANGE_TO_SPANISH: {
      return {
        ...state,
        english: false,
      };
    }
    case SEND_EMAIL: {
      return {
        ...state,
        auxState: action.payload,
      };
    }
    case CLEAR_AUX: {
      return {
        ...state,
        auxState: "",
      };
    }

    default:
      return {
        ...state,
      };
  }
}
