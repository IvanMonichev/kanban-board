export const generateId = () => Math.random().toString(36).substr(2, 9);

export const randomIntFromInterval = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1) + min);
