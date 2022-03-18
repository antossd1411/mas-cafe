import Link from "next/link"
import {useRouter} from "next/router"
import {useRef} from "react"

export default function Navlink({name, href}) {
	const router = useRouter();
	const activeClass =
	router.pathname == href ? "text-orange-2 underline" : "";
	return(
		<Link href={`${href}`}>
			<a className={`tracking-wider ${activeClass}`}>{name.toUpperCase()}</a>
		</Link>
		)
	}