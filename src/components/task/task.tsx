import { TaskModel } from '../../types/common';
import React, { FC } from 'react';

type TProps = {
	task: TaskModel;
};

const Task: FC<TProps> = ({ task }) => {
	return (
		<div className='taskboard__item task'>
			<div className='task__body'>
				<p className='task__view'>{task.title}и</p>
				<input className='task__input' type='text' defaultValue={task.title} />
			</div>
			<button className='task__edit' type='button' aria-label='Изменить' />
		</div>
	);
};

export default Task;
