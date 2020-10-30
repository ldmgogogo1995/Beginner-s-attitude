import render from '../index'

// const hooks: Array<any> = []
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
    }
    return lastCallback
}
export {
    useState,
    useCallback,
    useMemo
}

