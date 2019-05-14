import { createStore , combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// import all reducers
import { rootReducer as rootJSONReducer } from './reducers/json/rootJSONReducer';
import { watchPagesSaga } from './sagas/sagas';

export const history = createBrowserHistory();

const _developmentMode = process.env.NODE_ENV === "development";
const _composeEnhancers =
_developmentMode
    ? composeWithDevTools
    : null || compose;

const __rootReducer = combineReducers({
    router: connectRouter(history),
    json: rootJSONReducer
 });

const __logger = ((__store) => {
    return ((__next) => {
        return ((__action) => {
            // console.log('[Middleware] dispatching', __action);
            const __result = __next(__action);
            // console.log('[Middleware] next state', __store.getState());
            return __result;
        });
    });
});

const _sagaMiddleware = createSagaMiddleware();
const _routerMiddleware = routerMiddleware(history);
   // store creation
const __store = createStore(
   __rootReducer,
   _composeEnhancers(applyMiddleware(__logger, _sagaMiddleware, _routerMiddleware))
);
_sagaMiddleware.run(watchPagesSaga);

export default __store