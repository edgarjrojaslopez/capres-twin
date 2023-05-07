import Router from 'next/router'
import Head from 'next/head'
import nprogress from 'nprogress'

import GlobalStyles from './../styles/GlobalStyles'

import Layout from '../components/Layout'

const App = ({ Component, pageProps }) => (
  <>
    {' '}
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default App
