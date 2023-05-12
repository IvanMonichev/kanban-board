import { AppData } from '../types/state';
import { createTask } from './action';
import { createReducer } from '@reduxjs/toolkit';

const initialState: AppData = {
	task: '',
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(createTask, (state, action) => {
		state.task = action.payload;
	});
});
