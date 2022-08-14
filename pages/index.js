import { Layout } from "../components";
import Head from "next/head";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hardik Protfolio</title>
        <meta name="description" content="Created by Hardik Nariya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="home">
        <div className="container py-5 mb-5">
          <div className="introduction">
            <h1
              style={{
                fontSize: "calc(1.375rem + 1.5vw)",
                color: "#00ff7f",
              }}
            >
              Hello! I am
            </h1>
            <h1 className="name">Hardik Nariya</h1>
            <Typewriter
              options={{
                strings: ["Hello", "World"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
