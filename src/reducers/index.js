import * as actions from "../actions";

const initialState = {
  guesses: [
    {
      guess: "10",
      feedback: "warm"
    },
    {
      guess: "15",
      feedback: "warmer"
    },
    {
      guess: "20",
      feedback: "ice cold"
    },
    {}
  ]
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === actions.MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: [
        ...state.guesses,
        {
          guess: action.guess,
          feedback: action.feedback
        }
      ]
    });
  } else if (action.type === actions.RESTART_GAME) {
    return Object.assign({}, state, {
      guesses: [
        ...state.guesses,
        {
          guess: ""
        }
      ]
    });
  }
  return state;
};
