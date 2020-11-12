import Link from "next/link";
import Layout from "../components/layout/layout";

// export async function getServerSideProps(context) {
//   const NytApiKey = process.env.NYT_NEWS_API_KEY;
//   const [newsNewsHeadlines] = await Promise.all([
//     // fetch(
//     //   `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NytApiKey}`
//     // )
//     fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=dac2ad3b1fa0427bb445032114fd764c`
//     )
//       .then((r) => r.json())
//       .then((res) => res.articles),
//   ]).catch((err) => console.log(err));

//   return {
//     props: {
//       newsNewsHeadlines,
//     },
//   };
// }

export default function Books() {
  // console.log(newsNewsHeadlines);
  return (
    <>
      <Layout>
        <h1>Books Page - coming soon</h1>
        <h2>
          Go back to the{" "}
          <Link href="/">
            <a>home page</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
