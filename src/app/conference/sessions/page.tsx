import Link from "next/link";
import React from "react";
import { Session } from "@/types/conference";

async function getSessions(): Promise<{ sessions: Session[] }> {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/refs/heads/master/api/data/sessions.json",
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

export default async function page() {
  const data = await getSessions();

  return (
    <div>
      <h1>Welcome to Sessions page</h1>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tablular-nums">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }) => (
          <div key={id}>
            <h3>{title}</h3>
            {speakers &&
              speakers.map(({ id, name }) => <h3 key={id}>Speaker: {name}</h3>)}
            <h5>{description}</h5>
            <h5>Room: {room}</h5>
            <h5>Day: {day}</h5>
            <h5>Track: {track}</h5>
          </div>
        )
      )}
      <div>
        <Link href="/conference">Back to conference</Link>
      </div>
    </div>
  );
}
