import Background from './components/Background';

import Settings from './components/Settings/Settings';

import useGetImages from './hooks/useGetImages';

function App() {
  const images = useGetImages();

  console.log({ images });

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
      <Settings />
    </>
  );
}

export default App;
