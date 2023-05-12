import { Status } from '../constants';
import { TaskModel } from '../types/common';
import { generateID } from '../utils';

export const mockTasks: TaskModel[] = [
	{
		_id: generateID(),
		title: 'Выучить JS',
		status: Status.Backlog,
	},
	{
		_id: generateID(),
		title: 'Выучить React',
		status: Status.Backlog,
	},
	{
		_id: generateID(),
		title: 'Сделать домашку',
		status: Status.Backlog,
	},
	{
		_id: generateID(),
		title: 'Выпить смузи',
		status: Status.Processing,
	},
	{
		_id: generateID(),
		title: 'Перестать тупить',
		status: Status.Processing,
	},
	{
		_id: generateID(),
		title: 'Позвонить маме',
		status: Status.Done,
	},
	{
		_id: generateID(),
		title: 'Погладить Кекса',
		status: Status.Done,
	},
	{
		_id: generateID(),
		title: 'Прочитать Войну и Мир',
		status: Status.Backlog,
	},
	{
		_id: generateID(),
		title: 'Сходить погулять',
		status: Status.Basket,
	},
];
