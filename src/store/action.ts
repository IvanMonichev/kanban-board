import { createAction } from '@reduxjs/toolkit';

const Action = {
	CREATE_TASK: 'task/create',
};

export const createTask = createAction<string>(Action.CREATE_TASK);
