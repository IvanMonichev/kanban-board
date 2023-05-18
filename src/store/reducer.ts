import { AppData } from '../types/state';
import { getTasks } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: AppData = {
	tasks: [],
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getTasks, (state, action) => {
		state.tasks = action.payload;
	});
});
