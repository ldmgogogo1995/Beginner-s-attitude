import React from 'react';
import Count from './pages/Count'
import { useRecoilState } from 'recoil'
const App: React.FC = (props) => {
  console.log(useRecoilState, 'useRecoilState');

  return (
    <div className="App">
      <Count />
    </div>
  );
}

export default App;
