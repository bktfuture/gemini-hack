'use client';
import Image from 'next/image';
import FasfaTask from './FasfaTask';
import styles from './FasfaTask';

function Tasks(props: any) {
	return (
		<div className={styles.containerTask}>
			<div className="tasks">
				{Object.keys(props).map((key) => (
					<FasfaTask text={props[key]} key={key} />
				))}
			</div>
		</div>
	);
}

export default Tasks;
