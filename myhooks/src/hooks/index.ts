import render from '../index'

const hooks: Array<any> = []
let lastState: any
function useState(initialState: any): Array<any> {
    lastState = lastState ?? initialState
    function setState(newState: any) {
        lastState = newState;
        render()
    }
    return [lastState, setState]
}
/**
 * useState
 * @param {
 *     initialState:any
 *  }
*/
export {
    useState
}

