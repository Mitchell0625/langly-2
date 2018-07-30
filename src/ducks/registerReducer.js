import axios from 'axios';

const initialState = {
  language: {},
  goal: ''
};

const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
const SELECT_GOAL = 'SELECT_GOAL';

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

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case `SELECT_LANGUAGE`:
      return {
        ...state,
        language: action.payload
      };
    case `SELECT_GOAL`:
      console.log(action);
      return {
        ...state,
        goal: action.payload
      };
    default:
      return state;
  }
}
