import { Status } from '../constants';
import store from '../store';

export type Task = {
	_id: string;
	title: string;
	status: Status;
};

export interface AppData {
	tasks: Task[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
