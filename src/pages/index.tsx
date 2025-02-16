import Head from "next/head";
import Link from "next/link";



export default function Index() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Link href={"/home"}>Home</Link>
      
      </main>
    </>
  );
}
