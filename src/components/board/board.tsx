import { Status, StatusLabel } from '../../constants';
import { FC } from 'react';

const Board: FC = () => (
	<section className='taskboard'>
		<h2 className='visually-hidden'>Ваши задачи:</h2>
		{Object.values(Status).map((statusItem) => (
			<article
				key={statusItem}
				className={`taskboard__group taskboard__group--${statusItem}`}
			>
				<h3
					className={`taskboard__group-heading taskboard__group-heading--${statusItem}`}
				>
					{StatusLabel[statusItem]}
				</h3>
				<div className='taskboard__list'>
					<div className='taskboard__item task task--active'>
						<div className='task__body'>
							<p className='task__view'>Название первой задачи</p>
							<input
								className='task__input'
								type='text'
								defaultValue='Название первой задачи'
							/>
						</div>
						<button
							className='task__edit'
							type='button'
							aria-label='Изменить'
						/>
					</div>
					<div className='taskboard__item task'>
						<div className='task__body'>
							<p className='task__view'>Название первой задачи</p>
							<input
								className='task__input'
								type='text'
								defaultValue='Название первой задачи'
							/>
						</div>
						<button
							className='task__edit'
							type='button'
							aria-label='Изменить'
						/>
					</div>
					<div className='taskboard__item task'>
						<div className='task__body'>
							<p className='task__view'>Название первой задачи</p>
							<input
								className='task__input'
								type='text'
								defaultValue='Название первой задачи'
							/>
						</div>
						<button
							className='task__edit'
							type='button'
							aria-label='Изменить'
						/>
					</div>
					<div className='taskboard__item task'>
						<div className='task__body'>
							<p className='task__view'>Название первой задачи</p>
							<input
								className='task__input'
								type='text'
								defaultValue='Название первой задачи'
							/>
						</div>
						<button
							className='task__edit'
							type='button'
							aria-label='Изменить'
						/>
					</div>
					<div className='taskboard__item task'>
						<div className='task__body'>
							<p className='task__view'>Название первой задачи</p>
							<input
								className='task__input'
								type='text'
								defaultValue='Название первой задачи'
							/>
						</div>
						<button
							className='task__edit'
							type='button'
							aria-label='Изменить'
						/>
					</div>
				</div>
				{statusItem === Status.Basket ? (
					<button
						className='taskboard__button button button--clear'
						type='button'
					>
						<svg
							fill='none'
							height='22'
							viewBox='0 0 22 22'
							width='22'
							xmlns='http://www.w3.org/2000/svg'
						>
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
		))}
	</section>
);

export default Board;
