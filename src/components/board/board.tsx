import { Status } from '../../constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import List from '../list/list';
import { FC } from 'react';

const Board: FC = () => {
	const tasks = useAppSelector((state) => state.tasks);
	console.log(tasks);
	return (
		<section className='taskboard'>
			<h2 className='visually-hidden'>Ваши задачи:</h2>
			{Object.values(Status).map((statusItem) => (
				<List key={statusItem} statusItem={statusItem} tasks={tasks} />
			))}
		</section>
	);
};

export default Board;
