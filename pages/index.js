import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Sentidos Tea House</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Ir a <Link href={'/about'}  >About</Link>
        </h1> */}
        
        <img className='sentidos-image' src="/sentidos.png" alt="" />
        <p className={styles.description}>
          Estamos construyento el sitio...
          
        </p>

      </main>


    </div>
  )
}
