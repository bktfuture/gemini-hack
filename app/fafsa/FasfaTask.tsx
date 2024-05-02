import './fafsa.module.css';
import Image from 'next/image';
import BlackCheckBoxSVG from '../../public/icons/check_box.svg';
import PinkCheckBoxSVG from '../../public/icons/pink_check_box.svg';
import BlueCheckBoxSVG from '../../public/icons/blue_check_box.svg';
import PurpleCheckBoxSVG from '../../public/icons/purple_check_box.svg';
import BlankCheckBoxSVG from '../../public/icons/blank_check_box.svg';
import { useState } from 'react';

interface IndividualTaskProps {
	text: string;
}

interface checkBoxMapTypes {
	[key: number]: string;
}

function FasfaTask({ text }: IndividualTaskProps) {
	const [checkbox, setCheckbox] = useState(false);
	const [randomNumber, setRandomNumber] = useState(1);

	const checkBoxMap: checkBoxMapTypes = {
		1: BlueCheckBoxSVG,
		2: PurpleCheckBoxSVG,
		3: PinkCheckBoxSVG,
	};

	function toggleCheckbox() {
		if (checkbox === false) {
			const generatedRandomNumber: number = Math.floor(Math.random() * 3) + 1;
			setRandomNumber(generatedRandomNumber);
			setCheckbox(true);
		} else {
			setCheckbox(false);
		}
	}

	return (
		<div className="task">
			<div className="checkbox-and-task-text">
				<Image className="checkbox" onClick={toggleCheckbox} src={checkbox ? checkBoxMap[randomNumber] : BlankCheckBoxSVG} alt="checkbox" />
				<p className={checkbox ? 'task-text-black-checkbox' : 'task-text-blank-checkbox'}>{text}</p>
			</div>
		</div>
	);
}

export default FasfaTask;
