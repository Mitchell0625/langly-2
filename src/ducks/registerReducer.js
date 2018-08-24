import axios from 'axios';

const initialState = {
  language: {},
  goal: '',
  languages: [],
  isLoading: false,
  user: {}
};

const GET_LANGUAGES = 'GET_LANGUAGES';
const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
const SELECT_GOAL = 'SELECT_GOAL';
const SIGN_IN = 'SIGN_IN';

export function getLanguages() {
  return {
    type: GET_LANGUAGES,
    payload: axios.get('/api/getlang')
  };
}
export function selectLanguage(language) {
  return {
    type: SELECT_LANGUAGE,
    payload: language
  };
}

export function selectGoal(goal) {
  return {
    type: SELECT_GOAL,
    payload: goal
  };
}

export function signIn(name, email, password) {
  return {
    type: SIGN_IN,
    payload: axios.post('/sign-up', { name, email, password })
  };
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_LANGUAGES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_LANGUAGES}_FULFILLED`:
      return {
        ...state,
        languages: action.payload.data
      };
    case SELECT_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    case SELECT_GOAL:
      return {
        ...state,
        goal: action.payload
      };

    case `${SIGN_IN}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };

    default:
      return state;
  }
}
