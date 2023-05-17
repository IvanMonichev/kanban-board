import store from '../store';
import { TaskModel } from './common';

export interface AppData {
	tasks: TaskModel[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
