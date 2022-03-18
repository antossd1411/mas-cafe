import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card({background, text}) {
	return(
		<div className={styles.card}>
			<Image
				src={background}
				width={325}
				height={325}
				objectFit="cover"
			/>
			<p>{text}</p>
		</div>
		);
}