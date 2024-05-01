import styles from './navbarDs.module.css';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';

const NavbarDs = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.row}>
				<IoNotificationsOutline color="#A3AED0" fontSize="1.25rem" />
				<div className={styles.pfp}>
					<IoPersonOutline color="white" fontSize="1.2rem" />
				</div>
			</div>
		</div>
	);
};

export default NavbarDs;
