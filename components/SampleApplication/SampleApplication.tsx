import styles from './SampleAppl.module.css';
import Image from 'next/image';
import pfp from '../../public/sample.png';

const SampleApplication = ({ name }) => {
	return (
		<div className={styles.flex}>
			<h1 className={styles.textApl}>{name} Guide</h1>
			<Image src={pfp} width={500} height={600}></Image>
			<div className={styles.btnApl}>Start the {name}</div>
		</div>
	);
};

export default SampleApplication;
