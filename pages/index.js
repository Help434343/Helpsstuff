import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Help's Stuff</title>
      </Head>

      <main>
        <Header title="Welcome to Help's Stuff!" />
        <p className="description">
          No stuff :C
        </p>
      </main>

      <Footer />
    </div>
  )
}
