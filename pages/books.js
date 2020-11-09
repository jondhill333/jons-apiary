import Link from 'next/link';
import Layout from '../components/layout/layout';

export default function Books() {
    return (
      <>
      <Layout>
          <h1>Books Page - coming soon</h1>
          <h2>Go back to the <Link href="/"><a>home page</a></Link></h2>
      </Layout>
      </>

    )
  }