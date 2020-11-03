import React from 'react';
import ReactDOM from 'react-dom';

/**
 * useState
 *  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
 *   type SetStateAction<S> = S | ((prevState: S) => S);
 *  type Dispatch<A> = (value: A) => void;
*/
type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
let memoStates: Array<any> = []
let memoIndex: number = 0
function useState<T>(initialState: T): [T, SetStateAction<T>] {
  memoStates[memoIndex] = memoStates[memoIndex] ?? initialState
  const currIndex = memoIndex
  function setState<SetStateAction<T>>(newState:T ) {

  }
  return [memoStates[memoIndex++], setState]]
}
const App: React.FC = function () {
  return (
    <div
      style={{ width: 300, margin: '200px auto' }}
    >111</div>
  )
}
const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render()

