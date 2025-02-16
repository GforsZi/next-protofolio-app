import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  let name:string ="Givaldi";
  const router = useRouter()
  const Product = () => {
    router.push(`/product`)
  }
  return(
    <>
      <Head>
      <title>Create Next App</title>
      </Head>
      <main>
        <h1 className="">Name: {name}</h1>
        <button onClick={() => {Product()}}>Product</button>
      </main>
    </>
  )
}