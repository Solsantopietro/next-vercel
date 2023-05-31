import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
import { FC } from 'react'

interface Props {
    title?: string;
    children?: JSX.Element | JSX.Element[];
  }

export const MainLayout: FC<Props> = ({ children })=> {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                {children}

            </main>
        </>
    )
}