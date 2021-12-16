import Head from "next/head";
import getLocalTime from "../lib/time/get-local-time";
import React, { useEffect, useState } from "react";

export default function Overview() {
  const currentTime = getLocalTime();
  const [time, setTime] = useState(currentTime);

  function refreshTime() {
    setTime(getLocalTime());
  }

  useEffect(() => {
    setInterval(() => {
      refreshTime();
    }, 1000);
  }, []);

  return (
    <div className="wrapper center pt-l">
      <Head>
        <title>timezones.fyi</title>
        <meta name="description" content="A rizbizkits project" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="mono">
        <p>&#8962; Everyone's time is happening at once.</p>
        <h4>
          Yours is ticking at <span className="glow">{`${time}`}</span>.
        </h4>
      </main>
    </div>
  );
}
