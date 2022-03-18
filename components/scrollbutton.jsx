import styles from '../styles/ScrollButton.module.css'
import {Link as ScrollLink} from 'react-scroll'

export default function ScrollButton() {
	return(
		<ScrollLink className={styles.scrollButton} to="orangeSection" spy={false} smooth={true} duration={1500}>
			&#9660;
		</ScrollLink>
		);
}