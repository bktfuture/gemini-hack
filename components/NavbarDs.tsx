import styles from './navbarDs.module.css';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';

const NavbarDs = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.row}>
				<IoNotificationsOutline />
				<div className={styles.pfp}>
					<IoPersonOutline />
				</div>
			</div>
		</div>
	);
};

export default NavbarDs;
