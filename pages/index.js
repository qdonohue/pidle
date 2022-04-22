import Head from "next/head";
import Header from "../components/header";
import Row from "../components/row";

export default function Home() {
  return (
    <div className="bg-pi-digits bg-center min-h-screen">
      <div className="h-2" />
      <div className="bg-slate-100/[.9] w-3/5 mx-auto rounded-xl">
        <Head>
          <title>pidle</title>
          <meta name="description" content="Wordle x Pi" />
          <link rel="icon" href="/pi.png" />
        </Head>

        <main className="flex flex-col">
          <Header />
          <span>Is this shit working</span>
          <Row />
        </main>
      </div>
      <footer className="fixed bottom-0 py-1 pl-[50vw] w-full bg-white text-sm font-light">
        Created by Quinn Donohue
      </footer>
    </div>
  );
}
