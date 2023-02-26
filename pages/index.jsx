import { Layout } from "@/components";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Task Manager App</title>
      </Head>
      <main className="bg-gray-500 min-h-screen">
        <Layout />
      </main>
    </>
  )
}
