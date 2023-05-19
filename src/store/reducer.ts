import { AppData } from '../types/state';
import { createTask, getTasks } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: AppData = {
	tasks: [],
};

export const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getTasks, (state, action) => {
			state.tasks = action.payload;
		})
		.addCase(createTask, (state, action) => {
			state.tasks.push(action.payload);
		});
});
