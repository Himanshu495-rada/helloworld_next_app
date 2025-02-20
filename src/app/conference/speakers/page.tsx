import React from "react";
import Link from "next/link";
import styles from "../conference.module.css";
import { Speaker } from "@/types/conference";

async function getSpeakers(): Promise<{ speakers: Speaker[] }> {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/refs/heads/master/api/data/speakers.json"
  );
  const data = await response.json();
  return data;
}

export default async function page() {
  const data = await getSpeakers();

  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tablular-nums">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome Speakers page</h1>
      {data.speakers.map(({ id, name, bio }: Speaker) => (
        <div key={id}>
          <Link href={`/conference/speakers/${btoa(id)}`}>
            <h3>{name}</h3>
          </Link>

          <h5>{bio}</h5>
        </div>
      ))}

      <div>
        <Link href="/conference">Back to conference</Link>
      </div>
    </div>
  );
}
