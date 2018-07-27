import axios from "axios";

const initialState = {
  languages: [],
  goal: ""
};

const GET_LANGUAGES = "GET_LANGUAGES";

export function getLanguages() {
  return {
    type: GET_LANGUAGES,
    payload: axios.get("/api/getlang")
  };
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_LANGUAGES}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        languages: action.payload.data
      };
    default:
      return state;
  }
}
