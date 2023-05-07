import Head from 'next/head'
import tw from 'twin.macro'
export default function card() {
  return (
    <div>
      <Head>
        <title>Card TailwindCSS</title>
      </Head>
      <main tw="container mx-auto py-10 px-8">hello world</main>
    </div>
  )
}
