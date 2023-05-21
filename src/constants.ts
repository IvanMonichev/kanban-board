import { ToastOptions } from 'react-toastify';

export const enum InsertPosition {
	Beforebegin = 'beforebegin',
	Afterbegin = 'afterbegin',
	Beforeend = 'beforeend',
	Afterend = 'afterend',
}

export enum Status {
	Backlog = 'backlog',
	Processing = 'processing',
	Done = 'done',
	Basket = 'basket',
}

export const StatusLabel: Readonly<{ [key in Status]: string }> = {
	[Status.Backlog]: 'Бэклог',
	[Status.Processing]: 'В процессе',
	[Status.Done]: 'Готово',
	[Status.Basket]: 'Корзина',
};

export const COUNT_TASK = 7;

export const configurationToast: ToastOptions = {
	autoClose: 3000,
	theme: 'light',
	hideProgressBar: true,
};

export enum Key {
	Enter = 'Enter',
	Escape = 'Escape',
}
