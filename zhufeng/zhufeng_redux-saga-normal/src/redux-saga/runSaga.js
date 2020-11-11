
import proc from './proc'
export function runSaga({channel,dispatch,getState},saga){debugger
    let iterator = saga();
    const env = {
        channel,dispatch,getState
    }
    proc(env,iterator);
}