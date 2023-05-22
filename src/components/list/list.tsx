import { Status, StatusLabel } from '../../constants';
import { TaskModel } from '../../types/common';
import Task from '../task/task';
import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

type TProps = {
	statusItem: keyof typeof Status;
	tasks: TaskModel[];
};

const List: FC<TProps> = ({ statusItem, tasks }) => {
	const filteredTask = tasks.filter((task) => task.status === statusItem);
	const isEmptyList = filteredTask.length === 0;
	const isBasketSection = statusItem === Status.Basket;

	return (
		<Droppable droppableId={statusItem} type='group'>
			{(provided) => (
				<article
					{...provided.droppableProps}
					ref={provided.innerRef}
					id={statusItem}
					className={`taskboard__group taskboard__group--${statusItem}`}
				>
					<h3 className={`taskboard__group-heading taskboard__group-heading--${statusItem}`}>
						{StatusLabel[statusItem]}
					</h3>
					<div className='taskboard__list'>
						{filteredTask.map((task) => (
							<Task key={task._id} task={task} />
						))}
						{provided.placeholder}
						{isEmptyList ? (
							<div className={`taskboard__item task task--${statusItem} task--empty`}>
								<p>{isBasketSection ? 'Корзина пуста' : 'Перетащите карточку'}</p>
							</div>
						) : null}
					</div>
					{isBasketSection && !isEmptyList ? (
						<button className='taskboard__button button button--clear' type='button'>
							<svg fill='none' height='22' viewBox='0 0 22 22' width='22' xmlns='http://www.w3.org/2000/svg'>
								<rect
									fill='white'
									height='14.6667'
									transform='rotate(45 15.5374 5.16638)'
									width='1.83333'
									x='15.5374'
									y='5.16638'
								></rect>
								<rect
									fill='white'
									height='14.6667'
									transform='rotate(135 16.8337 15.5372)'
									width='1.83333'
									x='16.8337'
									y='15.5372'
								></rect>
							</svg>
							<span>Очистить</span>
						</button>
					) : null}
				</article>
			)}
		</Droppable>
	);
};

export default List;
