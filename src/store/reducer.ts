import { Status } from '../constants';
import { mockTasks } from '../mock/tasks-mock';
import { AppData } from '../types/state';
import { generateID } from '../utils';
import { createTask } from './action';
import { createReducer } from '@reduxjs/toolkit';

const initialState: AppData = {
	tasks: mockTasks,
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(createTask, (state, action) => {
		state.tasks.push({
			_id: generateID(),
			title: action.payload,
			status: Status.Backlog,
		});

		console.log(state.tasks);
	});
});
