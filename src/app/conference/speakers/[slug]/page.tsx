import React from "react";
import { PageProps, Speaker } from "@/types/conference";

async function getSpeakersinfo(slug: string): Promise<Speaker> {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/refs/heads/master/api/data/speakers.json"
  );
  let speakersList = await response.json();
  speakersList = speakersList.speakers;

  return getSpeakerDetails(speakersList, atob(slug));
}

function getSpeakerDetails(speakers: Speaker[], speakerId: string) {
  const speaker = speakers.find((speaker) => speaker.id === speakerId);
  if (speaker === undefined) {
    throw new Error("Speaker not found");
  }

  return speaker;
}

export default async function page({ params }: { params: PageProps }) {
  const { slug } = params;
  const speakerInfo = await getSpeakersinfo(slug);
  const { name, bio, sessions } = speakerInfo;
  return (
    <div>
      <h3>{name}</h3>
      <h5>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
