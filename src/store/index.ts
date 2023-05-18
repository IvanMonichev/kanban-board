import { COUNT_TASK } from '../constants';
import { getTasks } from './actions';
import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer,
});

store.dispatch(getTasks(COUNT_TASK));

export default store;
