import styles from './visa.module.css';
import FasfaTasks from '../fafsa/FasfaTasks';
import SampleApplication from '@/components/SampleApplication/SampleApplication';

function Visa() {
	const name = 'Visa Application';
	return (
		<div className={styles.main}>
			<div className={styles.col}>
				<h1 className={styles.gradientH1}>Visa Application Process</h1>
				<div className={styles.banner}>
					<h1 className={styles.bannerH}>Applications Open</h1>
					<p className={styles.bannerP}>October 1, 2025</p>
					<h1 className={styles.bannerH}>Suggested Deadline</h1>
					<p className={styles.bannerP}>March 2, 2025</p>
				</div>
				<h2 className={styles.h2}>About</h2>
				<div className={styles.pbox}>
					<p>
						International students looking to study in the U.S. will need to obtain a <span className={styles.pBlueN}>student visa</span>.
						Additionally, in order to obtain your Visa, applicants are required to pass an interview. The visa process is a lengthy one, and
						students are encouraged to prepare well in advance of the new academic year.
					</p>
					<p>
						In order to begin the student Visa application process, you must be accepted into a U.S. institution and receive a
						<span className={styles.pBlue}> Certificate of Eligibility (Form I-20)</span> from that institution. In addition to acceptance into a
						U.S. program, you must also provide evidence that you have sufficient funds at your disposal to pay for tuition, room, and boarding for
						the duration of your stay. This is essential and the Form I-20 cannot be issued without the appropriate financial documentation.
					</p>
					<p>
						After receiving the Form I-20, you’ll be able to schedule an appointment for a Visa interview. Visas can be issued up to 120 days
						before your scheduled date of departure. Appointments should therefore not be scheduled any earlier than this 4-month period.
						Procedures on booking an interview vary from country to country, and the most accurate information can be found at
						<span className={styles.pBlue}> www.embassy.state.gov</span>.
					</p>
				</div>

				<h2 className={styles.h2}>Gather the Documents Needed To Apply</h2>
				<div className={styles.tasksP}>
					<FasfaTasks
						text1="Certificate pf Eligibility (Form I-20)"
						text2="A valid passport"
						text3="A receipt of the paid Visa processing fee (non-refundable)"
						text4="Your driver license number (if you have one)"
						text5="A I-901 form (a receipt showing that the required SEVIS fee is paid)"
						text6="Financial proof that the student or thier financial sponsor will have enough money to cover tuition & living expenses for the first year of the student's stay. For example, notarized bank statment etc."
					></FasfaTasks>
				</div>

				<p className={styles.tip}>Keep these records! You may need them again.</p>
				<div className={styles.btn}>Start your Visa application</div>
				<h2 className={styles.h2}>The Visa Interview</h2>
				<div className={styles.pbox}>
					<p>
						As part of the Visa application process, you must attend a personal interview. If you don’t attend the interview, your visa application
						will automatically be rejected. If you cannot make the appointment for any reason, you must contact the
						<span className={styles.pBlue}> Visa Office</span> to reschedule.
					</p>
					<p>
						One objective of the interview is to test your English proficiency, so make sure you practice, respond to questions in English, and
						avoid using a translator. It is also essential to be knowledgeable about the institution you will be attending. Browse the college’s
						website, and familiarize yourself with details such as the institution’s location, programs offered, courses available, career paths,
						and so on.
					</p>
					<p>
						Below are some sample questions you may encounter during your interview. However, you may be asked about anything in your application,
						making it important to be prepared and to practice!
					</p>
				</div>
				<h2 className={styles.h2}>Sample Interview questions</h2>
				<div className={styles.pbox}>
					<ul>
						<li>What is the name of the school you wish to attend?</li>
						<li>Where is the school? What city is it in and what part of the U.S. does it belong to?</li>
						<li>Why do you wish to study in the US? Did you consider any other coutnries?</li>
						<li>What is the course name and the acaemic level you will study at?</li>
						<li>When does the course start and finish?</li>
						<li>Who is going to pay for you ttuiotion fees and living costs?</li>
						<li>
							Being able to make 'small talk' during interview is important as well. This means being able to talk informally about things like
							weather, news, your home country or sports.
						</li>
					</ul>
				</div>
				<h2 className={styles.h2}>Documents to bring to the Interview</h2>
				<div className={styles.tasksP}>
					<FasfaTasks
						text1="Original I-20 Form"
						text2="Financial evidence used for the I-20 Form"
						text3="A valid passport"
						text4="Proof of Student and Exchange Visit Information System (SEVIS) fee payment"
						text5="Cerificate of enrollment at a U.S institution"
						text6="Academic transcripts (with notarized translation if not in English)"
						text7="Passport-sized photograph"
					></FasfaTasks>
				</div>

				<h2 className={styles.h2}>Arrival in the U.S</h2>
				<div className={styles.pbox}>
					<p>
						As a student, you may arrive in the U.S. no earlier than 30 days before the start date on the immigration document (I-20). If the
						student arrives later than the start date stated on your I-20, then you should notify your school so the arrival date can be deferred.
						Students should report to our institutions within 15 days of the start date on the I-20
					</p>
				</div>
				<SampleApplication name={name}></SampleApplication>
			</div>
		</div>
	);
}

export default Visa;
