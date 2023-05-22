import { Status } from '../constants';

export interface TaskModel {
	_id: number;
	title: string;
	status: keyof typeof Status;
}
