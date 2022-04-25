import Head from "next/head";
import Header from "../components/header";
import Pidle from "../components/pidle";

const Home = () => {
  return (
    <div className="bg-pi-digits bg-center min-h-screen">
      <Head>
        <title>pidle</title>
        <meta name="description" content="Wordle x Pi" />
        <link rel="icon" href="/pi.png" />
      </Head>
      <br />
      <div className="bg-slate-100/[.9] w-3/5 mx-auto rounded-xl pt-1.5 pb-5 mb-2 overflow-auto">
        <Header />
        <Pidle solution="123456" />
      </div>
      <footer className="fixed bottom-0 py-1 flex w-full place-content-center bg-white text-sm font-light">
        <span className="">Created by Quinn Donohue</span>
      </footer>
    </div>
  );
};

export default Home;
