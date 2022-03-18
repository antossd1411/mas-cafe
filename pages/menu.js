import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import MenuCard from '../components/menucard'
import Card from '../components/card'

import {useRef, useState, useEffect} from 'react'

import styles from '../styles/Menu.module.css'
import range from '../styles/Range.module.css'

export default function Home() {

  const [scroll, setScroll] = useState(0);
  const [boxWidth, setWidth] = useState(0);
  const menuBox = useRef();

  useEffect(() => {
    setWidth(menuBox.current.scrollWidth - menuBox.current.offsetWidth);
  });

  const Scroll = (e) => {
    setScroll(e.target.value);

    menuBox.current.scroll({
      top: 0,
      left: scroll,
      behavior: "smooth"
    });
  }

  return (
    <div>
    <Head>
      <title>Menu</title>
      <link rel="icon" href="img/logo.png" />
      
    </Head>
     <Header />
     <main className={styles.Background}>
       <section className="w-full flex justify-between p-20">
        <article className="w-1/2 h-1/2 border-8 border-orange-2 p-4">
          <h1 className={styles.h1}>Enjoy</h1>
          <h1 className={styles.borderedH1}>Your</h1>
          <p className={styles.h2}>Capuccino</p>
        </article>
        <article className="w-1/2">
          <Image
          src="/img/cafe 1.png"
          width={500}
          height={500}
          objectFit="cover"
          />
        </article>
       </section>
       <h1 className={styles.h1}>Our <span className={styles.borderedH1}>menu</span></h1>
       <section ref={menuBox} className="w-auto overflow-x-hidden">
        <div className="w-auto inline-flex px-6">
          <MenuCard text="Carta 1" />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
       </section>
       <input type="range" className={range.slider} min="0" max={boxWidth} name="" id=""
       onChange={Scroll} value={scroll} onInput={Scroll} />
       {/**/}
       <section className="flex">
        <article className="w-1/2">
          <Image
          src="/img/coffee beans.png"
          width={500}
          height={500}
          objectFit="cover"
          />
        </article>
        <article className="w-1/2 flex flex-col justify-center">
          <h1 className="text-center text-5xl" >About our coffee</h1>
          <br/>
          <p className="text-3xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Fuga optio labore sint consequuntur soluta debitis impedit assumenda magni
            repellat vero, aliquid perferendis explicabo, iure repudiandae. 
            Architecto cum, non sunt nam.</p>
        </article>
       </section>
       <section className="bg-white p-6">
        <h2 className="text-center text-4xl text-orange-2 uppercase font-bold">Follow us on Instagram</h2>
        <div className="w-full flex justify-between my-12">
          <Card background="/img/image-card1.png" text="This is card 1" />
          <Card background="/img/image-card2.png" text="Esta es carta 2" />
          <Card background="/img/image-card3.png" text="Carta 3..." />
        </div>
       </section>
     </main>
    </div>
  )
}
