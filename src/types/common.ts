import { Status } from '../constants';

export interface TaskModel {
	_id: string;
	title: string;
	status: Status;
}
