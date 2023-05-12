import store from '../store';

export interface AppData {
	task: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
