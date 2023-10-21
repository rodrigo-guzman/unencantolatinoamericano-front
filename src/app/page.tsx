"use client";
import type { NextPage } from 'next'
import Head from 'next/head'
// import { Provider } from 'react-redux';
import HomePage from '../../features/home/home';
// import { store } from '../redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home: NextPage = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <Head>
        <title>Un Encanto LatinoAmericano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      {/* <BrowserRouter>
        <HomePage />
        <Routes>
          <Route path="/" element = {<HomePage/>}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* </Provider> */}
    </>
  )
}

export default Home
