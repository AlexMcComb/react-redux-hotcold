//Anything that originally used "setState" in the component is now being turned into an action here

export const GENERATE_AURAL_UPDATE = "GENERATE_AURAL_UPDATE";
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});

export const RESTART_GAME = "RESTART_GAME";
export const restartGame = correctAnswer => ({
  type: RESTART_GAME,
  correctAnswer
});

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});
