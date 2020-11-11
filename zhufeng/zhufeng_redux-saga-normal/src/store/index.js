import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from '../redux-saga';
import {rootSaga} from './saga';//其实是一个generator
let sagaMiddleware = createSagaMiddleware();
//let store = createStore(reducer);
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
//负责执行saga
sagaMiddleware.run(rootSaga);
export default store;
