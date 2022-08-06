import { Layout } from "../components";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hardik Protfolio</title>
        <meta name="description" content="Created by Hardik Nariya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: "200vh" }}>
        <h1>Hello hardik</h1>
      </div>
    </Layout>
  );
}
