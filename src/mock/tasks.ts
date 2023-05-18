import { Status } from '../constants';
import { TaskModel } from '../types/common';
import { generateId, randomIntFromInterval } from '../utils';

const TITLE_TASKS = [
	'Рисовать визуальные заметки по книге из списка',
	'Смотреть фильмы и мульты из моего списка',
	'Обновить портфолио',
	'Писать стихи',
	'Медитировать под трансцендентную музыку',
	'Читать или слушать книги из моего списка',
	'Пригласить друзей встретиться :з',
	'Навести легкий порядок',
	'Познакомиться с тем, с кем давно хотела',
	'Решать сбоник Голицынского',
	'Договориться о созвоне с потенциальным клиентом из списка',
	'Делать интерфейс проекта из своего списка',
	'Танцевать свои эмоции',
	'Рисовать голых людей по туториалам',
	'Выполнить задачу из таблицы дел по учебе',
	'Практика иностранного языка с носителем/в приложении',
	'Смотреть видео на английском',
	'Смотреть видео на японском',
	'Спланировать завтрашний день',
	'Сфтографировать мир как-то иначе',
	'Читать обучающие японскому языку материалы',
	'Изучать через фильмы и сервисы логику и математику',
];

const getRandomStatus = (): Status => {
	const statusKeys = Object.keys(Status);
	return Object.values(Status)[Math.floor(Math.random() * statusKeys.length)];
};

const generationTask = () => {
	return {
		_id: generateId(),
		title: TITLE_TASKS[randomIntFromInterval(0, TITLE_TASKS.length - 1)],
		status: getRandomStatus(),
	};
};

export const getGeneratedTasks = (count: number): TaskModel[] => {
	const result = [];
	for (let i = 0; i <= count; i++) {
		result.push(generationTask());
	}
	return result;
};
