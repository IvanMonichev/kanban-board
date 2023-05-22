import { getGeneratedTasks } from '../mock/tasks';
import { TaskModel } from '../types/common';
import { createAction } from '@reduxjs/toolkit';

const Actions = {
	// CREATE_TASK: 'task/create',
	GET_TASK: 'task/get',
	CREATE_TASK: 'task/create',
	EDIT_TASK: 'task/edit',
	UPDATE_TASKS: 'tasks/update',
};

// export const createTask = createAction<string>(Actions.CREATE_TASK);

export const getTasks = createAction(Actions.GET_TASK, (count: number) => {
	return {
		payload: getGeneratedTasks(count),
	};
});

export const createTask = createAction<TaskModel>(Actions.CREATE_TASK);

export const editTask = createAction<TaskModel>(Actions.EDIT_TASK);

export const updateTasks = createAction<TaskModel[]>(Actions.UPDATE_TASKS);
