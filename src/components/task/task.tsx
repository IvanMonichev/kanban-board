import { configurationToast, Key } from '../../constants';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { editTask } from '../../store/actions';
import { TaskModel } from '../../types/common';
import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';

type TProps = {
	task: TaskModel;
};

const Task: FC<TProps> = ({ task }) => {
	const dispatch = useAppDispatch();
	const [activeTask, setActiveTask] = useState<boolean>(false);
	const [activeDrag, setActiveDrag] = useState<boolean>(false);
	const [titleTask, setTitleTask] = useState<TaskModel['title']>(task.title);

	const getActiveClass = activeTask ? 'task--active' : '';

	const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
		evt.preventDefault();
		setTitleTask(evt.target.value);
	};

	const updateTask = () => {
		if (activeTask) {
			dispatch(editTask({ ...task, title: titleTask }));
			toast('Задача отредактирована', configurationToast);
		}
	};

	const handleKeyDownInput = (evt: KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === Key.Enter) {
			setActiveTask(!activeTask);
			updateTask();
			return;
		}

		if (evt.key === Key.Escape) {
			setActiveTask(!activeTask);
		}
	};

	const handleEditTask = () => {
		setActiveTask(!activeTask);
		updateTask();
	};

	return (
		<Draggable draggableId={String(task._id)} index={task._id}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className={`taskboard__item task task--${task.status} ${getActiveClass}`}
					data-id={task._id}
				>
					<div className='task__body'>
						<p className='task__view'>{titleTask}</p>
						<input
							className='task__input'
							type='text'
							defaultValue={titleTask}
							onChange={handleChangeInput}
							onKeyUp={handleKeyDownInput}
						/>
					</div>
					<button className='task__edit' type='button' aria-label='Изменить' onClick={handleEditTask} />
				</div>
			)}
		</Draggable>
	);
};

export default Task;
