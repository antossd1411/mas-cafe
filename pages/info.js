import Header from '../components/header'
import SocialMediaButtons from '../components/socialmediabuttons'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Info.module.css'

export default function Info() {
	return(
		<div>
		<Head>
			<title>Info</title>
      		<link rel="icon" href="img/logo.png" />

		</Head>
			<Header />
			<main className={styles.main}>
			<SocialMediaButtons />
			<section>
				<Link href="https://www.google.com/maps/place/1906+N+34th+St,+Seattle,+WA+98103,+USA/@47.647912,-122.3345836,18z/data=!4m5!3m4!1s0x549014fd0d49aaab:0x7f89892f84dbe16c!8m2!3d47.6481973!4d-122.3346145">
					<img src="/img/maps.jpg" alt="Coffee Addres" className={styles.map} />
				</Link>
				<article className="z-10 w-8/12 mx-auto p-12 shadow-xl bg-white transform -translate-y-1/2">
					<form className="w-full" action="">
						<h1 className="text-center text-5xl tracking-widest leading-tight">Make a</h1>
						<h1 className="text-center text-5xl tracking-widest leading-tight mb-12">Reservation</h1>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Complete Name</label>
							<input type="text" placeholder="Ex. Name Lastname" />
						</div>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Email</label>
							<input type="email" placeholder="email@example.com" />
						</div>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Subject</label>
							<input type="text" placeholder="Ex. Cost" />
						</div>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Message</label>
							<textarea name="" id="" cols="30" rows="5"></textarea>
						</div>
						<button className={styles.submitButton} type="submit">Send</button>
					</form>
				</article>
			</section>
			</main>
		</div>
		);
}