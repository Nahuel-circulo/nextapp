import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function aboutPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About - Nahuel</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Ir a <Link href={'/'}>Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

            </main>

        </div>

    )
}

