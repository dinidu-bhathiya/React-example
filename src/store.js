import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReduce from './Reduces';

export default createStore(rootReduce, applyMiddleware(thunk));