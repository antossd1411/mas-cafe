import styles from '../styles/MenuCard.module.css'


export default function MenuCard({text}) {
	return(
		<div className={styles.menuCard}>
			<div className={styles.menuText}><p>{text}</p></div>
		</div>
		);
}