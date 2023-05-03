import { FC } from 'react';
import { Status, StatusLabel } from './board.constant';

const Board: FC = () => (
  <section className='taskboard'>
    <h2 className='visually-hidden'>Ваши задачи:</h2>
    {Object.values(Status).map((statusItem) => (
      <article key={statusItem} className={`taskboard__group taskboard__group--${statusItem}`}>
        <h3 className={`taskboard__group-heading taskboard__group-heading--${statusItem}`}>
          {StatusLabel[statusItem]}
        </h3>
        <div className='taskboard__list'>
          <div className='taskboard__item task task--active'>
            <div className='task__body'>
              <p className='task__view'>Название первой задачи</p>
              <input className='task__input' type='text' defaultValue='Название первой задачи' />
            </div>
            <button className='task__edit' type='button' aria-label='Изменить' />
          </div>
          <div className='taskboard__item task'>
            <div className='task__body'>
              <p className='task__view'>Название первой задачи</p>
              <input className='task__input' type='text' defaultValue='Название первой задачи' />
            </div>
            <button className='task__edit' type='button' aria-label='Изменить' />
          </div>
          <div className='taskboard__item task'>
            <div className='task__body'>
              <p className='task__view'>Название первой задачи</p>
              <input className='task__input' type='text' defaultValue='Название первой задачи' />
            </div>
            <button className='task__edit' type='button' aria-label='Изменить' />
          </div>
          <div className='taskboard__item task'>
            <div className='task__body'>
              <p className='task__view'>Название первой задачи</p>
              <input className='task__input' type='text' defaultValue='Название первой задачи' />
            </div>
            <button className='task__edit' type='button' aria-label='Изменить' />
          </div>
          <div className='taskboard__item task'>
            <div className='task__body'>
              <p className='task__view'>Название первой задачи</p>
              <input className='task__input' type='text' defaultValue='Название первой задачи' />
            </div>
            <button className='task__edit' type='button' aria-label='Изменить' />
          </div>
        </div>
      </article>
    ))}
  </section>
);

export default Board;
