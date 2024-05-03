import styles from './SampleAppl.module.css';
import Image from 'next/image';
import pfp from '../../public/sample.png';
import visa from '../../public/visaSample.jpg';

const SampleApplication = ({ name }) => {
	return (
		<div className={styles.flex}>
			<h1 className={styles.textApl}>{name} Guide</h1>
			<Image src={visa} width={500} height={600}></Image>
			<div className={styles.btnApl}>
				<a className={styles.linkbtn} target="_blank" href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html">
					Start your Visa application
				</a>
			</div>
		</div>
	);
};

export default SampleApplication;
