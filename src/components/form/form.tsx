import { configurationToast, Status } from '../../constants';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { createTask } from '../../store/actions';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const Form: FC = () => {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector((state) => state.tasks);
	const [taskName, setTaskName] = useState('');

	const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
		evt.preventDefault();
		setTaskName(evt.target.value);
	};

	const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const lastTask = tasks[tasks.length - 1];
		const task = {
			_id: lastTask._id + 1,
			title: taskName,
			status: Status.Backlog,
		};
		dispatch(createTask(task));
		toast(`Задача "${taskName}" успешно добавлена.`, configurationToast);
		setTaskName('');
	};

	return (
		<section className='add-task'>
			<h2 className='visually-hidden'>Добавить задачу</h2>
			<form className='add-task__form' aria-label='Форма добавления задачи' onSubmit={handleSubmitForm}>
				<div className='add-task__input-wrapper'>
					<label htmlFor='add-task'>Новая задача</label>
					<input
						type='text'
						name='task-name'
						id='add-task'
						placeholder='Название задачи...'
						required
						value={taskName}
						onChange={handleInputChange}
						minLength={2}
					/>
				</div>
				<button className='add-task__button button' type='submit'>
					<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<rect x='10.0833' y='3.66663' width='1.83333' height='14.6667' fill='white' />
						<rect
							x='18.3333'
							y='10.0833'
							width='1.83333'
							height='14.6667'
							transform='rotate(90 18.3333 10.0833)'
							fill='white'
						/>
					</svg>
					<span>Добавить</span>
				</button>
			</form>
		</section>
	);
};

export default Form;
