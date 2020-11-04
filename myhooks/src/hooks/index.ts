import render from '../index.copy'

// const hooks: Array<any> = []

// interface UseState<S>{
//     (initialState: S | (() => S)): [S, any]
// }
let lastStates: any[] = []
let hookIndex: number = 0
const initialIndex = () => {
    hookIndex = 0
}
type InitialState<S> = S | ((preState: S) => S) | any
/**
 * useState
 * @param {
    *     initialState:any
    *  }
*/
const useState = function <T = any>(initialState: any) {
    lastStates[hookIndex] = lastStates[hookIndex] ?? initialState
    const currentIndex = hookIndex
    function setState(newState: InitialState<T>) {
        if (typeof newState === 'function') {
            lastStates[currentIndex] = newState(lastStates[currentIndex])
        } else {

            lastStates[currentIndex] = newState;
        }
        render()
    }
    return [lastStates[hookIndex++], setState]
}

/**
 * useMemo
 * @param {
    *     callBack:Function,
    *      dependencies
    *  }
   */

function useMemo(callback: Function, dependencies: Array<any>) {

}
/**
 * useCallback
 * @param {
    *     callBack:Function,
    *      dependencies
    *  }
    *   function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
   */
let lastCallback: any
let lastCallbackDependencies: any
function useCallback<T extends (...arg: any[]) => any>(callback: T, dependencies: Array<any>): T {
    if (lastCallbackDependencies) {
        //查看依赖项是否发生改变
        let changed = !dependencies.every((item: any, index: number) => item === lastCallbackDependencies[index])
        if (changed) {
            lastCallback = callback;
            lastCallbackDependencies = dependencies
        }
    } else {
        //此时 是第一次
        lastCallback = callback
        lastCallbackDependencies = dependencies
    }
    return lastCallback
}
export {
    useState,
    useCallback,
    useMemo,
    initialIndex
}

