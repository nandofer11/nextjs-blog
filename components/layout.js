import styles from './layout.module.css';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';

const name = "Orlando Fernández";
export const siteTitle = "Next.js Website Personal";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name='description'
                    content="Aprende como construir un sitio personal usando Next.js"
                />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=''
                        />
                        <h1 className={utilStyles.heading2X1}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <Image
                                priority
                                src='/images/profile.jpg'
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=''
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href='/' className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )

                }
            </header>
            <main>{children}</main>
            {
                !home && (
                    <div className={styles.backToHome}>
                        <Link href='/'>Regresar a Inicio</Link>
                    </div>
                )
            }
        </div>
    );
}