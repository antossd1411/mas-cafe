import styles from '../styles/SocialMediaButtons.module.css'

import Image from 'next/image'

export default function SocialMediaButtons() {
	return(
		<div className={styles.buttonsContainer}>
			<Image
			src="/img/whatsapp.png"
			width={100}
			height={100}
			objectFit="cover"/>
			<Image
			src="/img/instagram.jpg"
			width={100}
			height={100}
			objectFit="cover"/>
		</div>
		);
}