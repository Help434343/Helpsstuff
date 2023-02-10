import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head style = background-color:black;>
        <title>Help's Stuff</title>
      </Head>

      <main>
        <h1 style = color:white;>"Welcome to Help's Stuff!" <h1/>
        <p style = color:white;>
          No stuff :C
        </p>
      </main>

      <Footer />
    </div>
  )
}
