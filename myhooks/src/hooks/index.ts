import render from '../index'

// const hooks: Array<any> = []

interface UseState<S>{
    (initialState: S | (() => S)): [S, any]
}
let lastStates: any[] = []
let index: number = 0
const initialIndex = () => index = 0
/**
 * useState
 * @param {
    *     initialState:any
    *  }
   */
const useState: UseState<any> =function (initialState) {
    lastStates[index] = lastStates[index] ?? initialState
    function setState(newState: any) {
        lastStates[index] = newState;
        render(initialIndex)
    }
    return [lastStates[index], setState]
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
    console.log(dependencies);

    if (lastCallbackDependencies) {
        //查看依赖项是否发生改变
        let changed = !dependencies.every((item: any, index: number) => item === lastCallbackDependencies[index])
        console.log(changed, 'change');

        if (changed) {
            lastCallback = callback;
            lastCallbackDependencies = dependencies
        }
    } else {
        //此时 是第一次
        lastCallback = callback
    }
    return lastCallback
}
export {
    useState,
    useCallback,
    useMemo
}

