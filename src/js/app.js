import GameSavingLoader from './GameSavingLoader';

(async () => {
/* eslint-disable */
  try {
    console.log(await GameSavingLoader.load());
  } catch (err) {
    console.log(err);
  }
})();
