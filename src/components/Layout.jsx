import Head from 'next/head'
import tw from 'twin.macro'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real State</title>
    </Head>
    <div css={tw`max-w-[1280px] px-5`}>
      <header>Navbar</header>
      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  </>
)
export default Layout
