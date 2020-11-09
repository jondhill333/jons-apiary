import Link from 'next/link'
import Layout from '../components/layout/layout'

export default function newsPage() {
    return (
      <>
      <Layout>
          <h1>This is where the news Page will go</h1>
          <h2>Go back to the <Link href="/"><a>home page</a></Link></h2>
      </Layout>
      </>

    )
  }