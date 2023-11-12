"use client";
import type { NextPage } from 'next'
import Head from 'next/head'
// import { Provider } from 'react-redux';
import HomePage from '../../components/home/home';
// import { store } from '../redux/store';
import styles from './page.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title >Un Encanto LatinoAmericano</title>
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <HomePage />
      
    </>
  )
}

export default Home
