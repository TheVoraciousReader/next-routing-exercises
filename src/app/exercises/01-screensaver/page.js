import React from "react";

import ScreenSaver from "../../../components/ScreenSaver";
import Link from "next/link";

function ScreenSaverHome() {
  return (
    <main>
      <p> Choose screen saver color: </p>
      <ul>
        <Link href={"/exercises/01-screensaver/pink"}>
          <li>pink</li>
        </Link>
        <Link href={"/exercises/01-screensaver/slateblue"}>
          <li>slateblue</li>
        </Link>
        <Link href={"/exercises/01-screensaver/violet"}>
          <li>violet</li>
        </Link>
        <Link href={"/exercises/01-screensaver/white"}>
          <li>white</li>
        </Link>
      </ul>
    </main>
  );
}

export default ScreenSaverHome;
