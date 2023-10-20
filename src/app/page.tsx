import type { NextPage } from 'next'
import Head from 'next/head'
// import { Provider } from 'react-redux';
import HomePage from '../../features/home/home';
// import { store } from '../redux/store';

const Home: NextPage = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <Head>
        <title>Un Encanto LatinoAmericano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      {/* </Provider> */}
    </>
  )
}

export default Home
