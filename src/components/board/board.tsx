import { Status } from '../../constants';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { updateTasks } from '../../store/actions';
import List from '../list/list';
import { FC, useCallback } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const Board: FC = () => {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector((state) => state.tasks);

	const onDragEnd = useCallback((result: DropResult) => {
		// eslint-disable-next-line no-console
		console.log(result);
		const { source, destination, type } = result;

		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId && source.index === destination.index) {
			return;
		}

		if (type === 'group') {
			let reorderedStores = [...tasks];

			const sourceIndex = source.index;
			const destinationIndex = destination.index;
			const destinationStatus = destination.droppableId as keyof typeof Status;
			const currentIndex = reorderedStores.findIndex((task) => task._id === sourceIndex);

			const newTask = reorderedStores[currentIndex];
			newTask.status = destinationStatus;

			reorderedStores = [...reorderedStores, newTask];

			reorderedStores[currentIndex].status = destinationStatus;
			const [removedStore] = reorderedStores.splice(sourceIndex, 1);
			reorderedStores.splice(destinationIndex, 0, removedStore);

			return dispatch(updateTasks(reorderedStores));
		}
	}, []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<section className='taskboard'>
				<h2 className='visually-hidden'>Ваши задачи:</h2>
				{Object.values(Status).map((statusItem) => (
					<List key={statusItem} statusItem={statusItem} tasks={tasks} />
				))}
			</section>
		</DragDropContext>
	);
};

export default Board;
