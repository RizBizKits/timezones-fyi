import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container && "mono"}>
      <Head>
        <title>timezones.fyi</title>
        <meta name="description" content="A rizbizkits project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>&#8962;</p>

        <p>âYou can have it all. Just not all at once.â</p>
        <p>â Oprah Winfrey</p>

        <a href="/overview" className="glow">
          â Overview
        </a>
      </main>
    </div>
  );
}
