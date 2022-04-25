import Head from "next/head";
import Box from "../components/box";
import Header from "../components/header";
import Row from "../components/row";

export default function Home() {
  const v = 2;
  return (
    <div className="bg-pi-digits bg-center min-h-screen">
      <br />
      <div className="bg-slate-100/[.9] w-3/5 mx-auto rounded-xl py-2">
        <Head>
          <title>pidle</title>
          <meta name="description" content="Wordle x Pi" />
          <link rel="icon" href="/pi.png" />
        </Head>
        <Header />
        <Row />
      </div>
      <footer className="fixed bottom-0 py-1 flex w-full place-content-center bg-white text-sm font-light">
        <span className="">Created by Quinn Donohue</span>
      </footer>
    </div>
  );
}
