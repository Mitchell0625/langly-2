import axios from "axios";

const initialState = {
  language: {},
  goal: ""
};

const SELECT_LANGUAGE = "SELECT_LANGUAGE";

export function selectLanguage(language) {
  return {
    type: SELECT_LANGUAGE,
    payload: language
  };
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case `SELECT_LANGUAGE`:
      console.log(action);
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
}
