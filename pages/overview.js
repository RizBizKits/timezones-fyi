import Head from "next/head";
import getLocalTime from "../lib/time/get-local-time";
import getLocalTimezone from "../lib/time/get-local-timezone";
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function Overview() {
  const currentTime = getLocalTime();
  const currentTimezone = getLocalTimezone();
  const [time, setTime] = useState(currentTime);

  function refreshTime() {
    setTime(getLocalTime());
  }

  useEffect(() => {
    setInterval(() => {
      refreshTime();
    }, 1000);
  }, []);

  const n = DateTime.now();
  const now = n.toLocaleString(DateTime.TIME_WITH_SECONDS);
  const z = n.toFormat("ZZZZ");

  const aa = DateTime.now()
    .setZone("America/New_York")
    .toLocaleString(DateTime.TIME_WITH_SECONDS);
  const a = DateTime.now().setZone("America/New_York").toFormat("ZZZZ");

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

        <h4 class="txt-c">
          Yours is ticking at <span className="glow">{now}</span>{" "}
          <span className="highlight">{z}</span>
        </h4>
        <button class="btn">
          <img src="/icons/edit-btn.svg" alt="" />
        </button>
        <button class="btn">
          <img src="/icons/refresh-btn.svg" alt="" />
        </button>
        {/* <h4>
          Adrian's ticking at <span className="glow">{aa}</span>{" "}
          <span className="highlight">{a}</span>.
        </h4> */}
      </main>
    </div>
  );
}
