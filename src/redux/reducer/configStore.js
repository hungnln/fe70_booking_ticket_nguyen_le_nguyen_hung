import { combineReducers, createStore } from 'redux';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';

const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    BaiTapDatVeReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());