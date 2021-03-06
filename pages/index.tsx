import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/layout/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        Hello!
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/Agon21Misini"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built By Agon Misini
        </a>
      </footer>
    </div>
  )
}
export default Home