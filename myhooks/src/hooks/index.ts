import render from '../index'

const hooks: Array<any> = []
let lastState: any
/**
 * useState
 * @param {
    *     initialState:any
    *  }
   */
function useState(initialState: any): Array<any> {
    lastState = lastState ?? initialState
    function setState(newState: any) {
        lastState = newState;
        render()
    }
    return [lastState, setState]
}
/**
 * useMemo
 * @param {
    *     callBack:Function,
    *      dependencies
    *  }
   */
let lastCallback;
let lastCallbackDependencies;
function useMemo(callBack: Function, dependencies: Array<any>) {

}
/**
 * useCallback
 * @param {
    *     callBack:Function,
    *      dependencies
    *  }
   */
  function useCallback(){
      
  }
export {
    useState
}

