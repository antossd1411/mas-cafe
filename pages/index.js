import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import ScrollButton from '../components/scrollbutton'
import Card from '../components/card'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="img/logo.png" />
    </Head>
     <Header />
     <main className="overflow-hidden">
         <section className="flex ml-10">
            <article className="w-1/2 transform -translate-x-64 animate-enter">
              <Image src="/img/image-section1.png"
              width={980}
              height={850}
              objectFit="cover"
              />
            </article>
            <article className="w-1/2 flex flex-col justify-center px-12 py-26 transform translate-x-64 animate-enter">
              <h1 className="text-left text-5xl tracking-widest leading-tight">A space to connect</h1>
              <h1 className="text-center text-5xl tracking-widest leading-tight">people</h1>
              <br/>
              <h3 className="text-3xl tracking-widest">We offer a health space to meet talk, lunch and chill with other people.</h3>
             </article>
         </section>
         <section className="bg-orange-1 ml-10">
            <div className="relative">
                {/*Scroll div*/}
                <ScrollButton/>
            </div>
            <div id="orangeSection" className="flex pt-40 px-20">
                {/*Content div*/}
                <article className="w-1/2 transform -translate-x-64 animate-enter">
                    <h1 className="text-left text-5xl tracking-widest leading-tight">Work with</h1>
                    <h1 className="text-left text-5xl tracking-widest leading-tight">your team</h1>
                    <br/>
                  <h3 className="text-3xl tracking-widest">A good workspace for group tasks.</h3>
                </article>
                <article className="w-1/2 transform translate-x-64 animate-enter">
                    <Image
                    src="/img/image-section2.png"
                    width={750}
                    height={730}
                    objectFit="cover"
                    />
                </article>
            </div>
         </section>
         <section className="relative">
            <article className="shadow-md z-10 w-1/3 mx-auto p-12 transform bg-white text-xl -translate-y-1/2">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Natus explicabo recusandae sed aliquid quo quasi. Eveniet quos accusamus odit placeat ea, fugit, fuga quis rerum, rem suscipit delectus id repellendus?</p>
            </article>
         </section>
         <section className="opacity-0 animate-fadeIn">
            <article className="flex items-center">
                <h1 className="text-center text-5xl w-4/12">Our space</h1>
                <p className="text-2xl w-8/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia optio alias molestiae.</p>
            </article>
            <article className="py-24 flex justify-start">
                <Card background="/img/image-card1.png" text="This is card 1" />
                <Card background="/img/image-card2.png" text="Esta es carta 2" />
                <Card background="/img/image-card3.png" text="Carta 3..." />
            </article>
         </section>
         <section className="py-12 w-10/12 mx-auto flex relative">
{/*            <div className={styles.decoBox}>
            </div>
*/}            <article className={styles.decoShadow}>
                <Image
                src="/img/image-section3.png"
                width={650}
                height={800}
                objectFit="cover"
                />
            </article>
            <article className="px-12 w-1/2 flex flex-col">
                <h1 className="text-left text-5xl tracking-widest leading-tight">How to</h1>
                <h1 className="text-right text-5xl tracking-widest leading-tight">find us?</h1>
                <br/>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio inventore quidem voluptas dolor? Ipsa, labore minima a debitis accusantium. Obcaecati pariatur atque cumque quos eligendi cum doloribus quia possimus?</p>
            </article>
         </section>
     </main>
    </div>
  )
}
