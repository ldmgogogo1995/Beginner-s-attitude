import React, { } from 'react';
import ReactDOM from 'react-dom';

/**
 * useState
 *  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
 *   type SetStateAction<S> = S | ((prevState: S) => S);
 *  type Dispatch<A> = (value: A) => void;
*/

let memoStates: Array<any> = []
let memoIndex: number = 0
let lastCallback: any
let lastCallbackDependencies: any
let lastMemo: any;
let lastMemoDependencies: any
function useState<T>(initialState: T) {
  memoStates[memoIndex] = memoStates[memoIndex] ?? initialState
  const currIndex = memoIndex
  function setState(newState: any) {
    if (typeof newState === 'function') {
      memoStates[currIndex] = newState(memoStates[currIndex])
    } else {
      memoStates[currIndex] = newState
    }
    console.log(memoStates[currIndex], 'memoStates');

    render()
  }
  return [memoStates[memoIndex++], setState]
}
function useCallback<T extends (...arg: any[]) => any>(callback: T, dependencies: Array<any>): T {
  if (lastCallbackDependencies) {
    //是否发生改变
    const isChange: boolean = !dependencies.every((item, index) => item === lastCallbackDependencies[index])
    if (isChange) {
      lastCallback = callback;
      lastCallbackDependencies = dependencies
    }
  } else {
    lastCallback = callback
    lastCallbackDependencies = dependencies
  }
  return lastCallback
}
function useMemo<T extends (...arg: any[]) => any>(callback: T, dependencies: Array<any>): T {
  if (lastMemoDependencies) {
    //是否发生改变
    const isChange: boolean = !dependencies.every((item, index) => item === lastMemoDependencies[index])
    if (isChange) {
      lastMemo = callback()
      lastMemoDependencies = dependencies
    }
  } else {
    lastMemo = callback()
    lastMemoDependencies = dependencies
  }
  return lastMemo
}
const App: React.FC = function () {
  const [count, setCount] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const changeCount = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const memoCount = useMemo(() => count + Math.random(), [count])
  return (
    <>
      <div
        onClick={changeCount}
        style={{ width: 300, margin: '200px auto', cursor: 'pointer' }}
      >
        {memoCount}
      </div>
      <input type="text" onChange={e => setTitle(e?.target?.value)} />{title}
    </>
  )
}
const render = () => {
  memoIndex = 0
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render()

