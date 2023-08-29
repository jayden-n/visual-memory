import { useState } from 'react';
import Background from './components/Background';

import Settings from './components/Settings/Settings';

import useGetImages from './hooks/useGetImages';
import Board from './components/Board/Board';

function App() {
  const [gameOptions, setGameOptions] = useState(null);

  const startGame = (options) => {
    setGameOptions(options);
  };

  const restartGame = () => {
    setGameOptions(null);
  };

  return (
    <>
      <Background />
      <h1>Visual Memory</h1>
      {!gameOptions ? (
        <Settings startGame={startGame} />
      ) : (
        <Board gameOptions={gameOptions} restartGame={restartGame} />
      )}
    </>
  );
}

export default App;
