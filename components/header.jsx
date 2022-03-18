import Image from "next/image"
import Navlink from '../components/navlink';

export default function Header() {
	return(
		<header className="w-full flex justify-between items-center font-bold
		font-sans text-gray-600 py-3 pr-5 pl-28">
			<Image
				src="/img/logo.png"
				width={50}
				height={50}
			/>
			<nav className="">
				<ul className="flex justify-between">
					<li>
						<Navlink name="home" href="/" />
					</li>
					<li>
						<Navlink name="menu" href="/menu" />
					</li>
					<li>
						<Navlink name="info" href="/info" />
					</li>
				</ul>
			</nav>
		</header>
		);
}