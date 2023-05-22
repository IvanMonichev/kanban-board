import { TaskModel } from '../types/common';
import { AppData } from '../types/state';
import { createTask, editTask, getTasks, updateTasks } from './actions';
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
		})
		.addCase(editTask, (state, action) => {
			const currentTask = state.tasks.find((task) => task._id === action.payload._id) as TaskModel;
			const currentIndex = state.tasks.indexOf(currentTask);

			if (currentIndex !== -1) {
				state.tasks[currentIndex] = action.payload;
			}
		})
		.addCase(updateTasks, (state, action) => {
			state.tasks = action.payload;
		});
});
