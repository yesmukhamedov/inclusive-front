import { configureStore } from '@reduxjs/toolkit';
import { testsReducer } from './slices/tests';
import { authReducer } from './slices/auth';
import { studentsReducer } from './slices/students';

const asyncThunkMiddleware = store => next => action => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };

const store = configureStore({
    reducer: {
        tests: testsReducer,
        auth: authReducer,
        students: studentsReducer 
    },
    middleware: [asyncThunkMiddleware],
});

export default store;