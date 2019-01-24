//Anything that originally used "setState" in the component is now being turned into an action here

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess,
  feedback,
  correctAnswer
});

export const RESTART_GAME = "RESTART_GAME";
export const restartGame = () => ({
  type: RESTART_GAME,
  guess,
  feedback,
  correctAnswer
});
