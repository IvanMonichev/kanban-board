import { Status } from '../../constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import List from '../list/list';
import { FC } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const Board: FC = () => {
	const tasks = useAppSelector((state) => state.tasks);

	const handleDragEnd = () => {
		// eslint-disable-next-line no-console
		console.log();
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<section className='taskboard'>
				<h2 className='visually-hidden'>Ваши задачи:</h2>
				{Object.values(Status).map((statusItem, number) => (
					<List key={statusItem} statusItem={statusItem} tasks={tasks} />
				))}
			</section>
		</DragDropContext>
	);
};

export default Board;
