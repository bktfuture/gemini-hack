import SampleApplication from '@/components/SampleApplication/SampleApplication';
import styles from './fafsa.module.css';
import FasfaTasks from './FasfaTasks';

function Fafsa(props: any) {
	return (
		<div className={styles.main}>
			<div className={styles.col}>
				<h1 className={styles.gradientH1}>FAFSA Application Process</h1>
				<div className={styles.banner}>
					<h1 className={styles.bannerH}>Applications Open</h1>
					<p className={styles.bannerP}>October 1, 2025</p>
					<h1 className={styles.bannerH}>Suggested Deadline</h1>
					<p className={styles.bannerP}>March 2, 2025</p>
				</div>
				<h2 className={styles.h2}>About</h2>
				<div className={styles.pbox}>
					<p>Applying for FAFSA helps provide a comprehensive overview of your financial situation, and helps you access educational funding. </p>
					<ul>
						This information can help strengthen your Visa application by:
						<li>Serving as a proof of funds</li>
						<li>Demonstrating your financial preparedness for studying abroad</li>
						<li>Preparing you for your Visa interview</li>
					</ul>
					<p>
						FAFSA comes on a first-come-first-serve basis, so it’s best to apply as soon as possible! Plan to submit your FAFSA form by the
						earliest due date for your best chance at receiving financial aid. Some states and colleges continue to award aid to FAFSA latecomers,
						but your chances get much slimmer, and the payout is often lower. If you miss the June 30, 2025 federal deadline, you’re no longer
						eligible to apply for the 2025 FAFSA form.
					</p>
				</div>

				<h2 className={styles.h2}>Gather the Documents Needed To Apply</h2>
				<FasfaTasks
					text1="Your SSN"
					text2="Parents SSN (if you're a dependent student"
					text3="Your driver license number (if you have one)"
					text4="Your A-number (if you are not a U.S citizen)"
					text5="Ypur federal task information"
					text6="Records of childs support recieved"
					text7="Current balances of cash, savings, and checking accounts"
					text8="Net worth of investments, business, and farm"
				></FasfaTasks>
				<p>Keep these records! You may need them again</p>
				<div className={styles.btn}>Start the FAFSA form</div>
				<h2>Deadlines</h2>
				<div className={styles.pbox}>
					<ul>
						When applying for FASFA, there are 3 deadlines you need to know about:
						<li>College deadlines</li>
						<li>State deadlines</li>
						<li>Federal deadline</li>
					</ul>
				</div>
				<h2>College Deadlines</h2>
				<div className={styles.pbox}>
					<p>
						College deadlines vary from school to school, but they’re typically early, and come well before the academic year starts. If you’re
						applying to multiple colleges, look up each school’s FAFSA® deadline and apply early. Many college FAFSA due dates also have priority
						deadlines, which means you need to submit your FAFSA form by that date to potentially receive the most money from the college. Many
						colleges have this date list on their financial aid webpages. If you can’t find it online, call the school’s Financial Aid Office. If
						you haven’t decided on which colleges you’re applying to yet, don’t worry! You can still submit your FAFSA form. Just list any school
						you’re considering, even if you may not apply. You can always add or remove schools from your FAFSA form later.
					</p>
				</div>
				<h2>Stata Deadlines</h2>
				<div className={styles.pbox}>
					<p>
						Be sure to also check each college’s home state deadline. Some states have hard deadlines, while others will suggest dates for you to
						apply by, to ensure you get priority consideration for financial aid. Many states have limited funds, so try to submit your FAFSA form
						as soon as possible!
					</p>
				</div>
				<h2>Federal Deadline</h2>
				<div className={styles.pbox}>
					<p>
						This last deadline comes from the U.S. Department of Education (i.e., FAFSA itself). The FAFSA form for the particular academic year
						that you’re applying for becomes unavailable after June 30. For example, if you’re trying to apply for the 2024-25 school year, the
						FAFSA form will disappear from StudentAid.gov on June 30, 2025, because that’s the end of the 2024–25 academic year.  That’s right—you
						can technically go through your entire year at college before submitting your FAFSA form. But earlier deadlines from colleges and
						states make waiting a bad idea.Apply as early as possible to increase your chances of receiving educational funding—and more of it!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Fafsa;
