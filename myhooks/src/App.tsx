import React from 'react';
import Count from './pages/Count'
import Title from './pages/Title'
import { useRecoilState } from 'recoil'
const App: React.FC = (props) => {
  console.log(useRecoilState, 'useRecoilState');

  return (
    <div className="App">
      <Count />
      <Title  />
    </div>
  );
}

export default App;
