import Head from "next/head";
import { useRouter } from "next/router";

 export default function SkillPage() {
  const { query } = useRouter()
  console.log(query);
  
  return(
    <>
      <Head>
      <title>Product page</title>
      </Head>
      <main>
        <h1>Product: {query.slug ? query.slug[0] : "All"}</h1>
      </main>
    </>
  )
}
