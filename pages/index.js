import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timezones.fyi</title>
        <meta name="description" content="A rizbizkits project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4>“You can have it all. Just not all at once.”</h4>
        <h4>― Oprah Winfrey</h4>
        <p> &#8962;</p>
      </main>
    </div>
  );
}
