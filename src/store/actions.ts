import { getGeneratedTasks } from '../mock/tasks';
import { createAction } from '@reduxjs/toolkit';

const Actions = {
	// CREATE_TASK: 'task/create',
	GET_TASK: 'task/get',
};

// export const createTask = createAction<string>(Actions.CREATE_TASK);

export const getTasks = createAction(Actions.GET_TASK, (count: number) => {
	return {
		payload: getGeneratedTasks(count),
	};
});
