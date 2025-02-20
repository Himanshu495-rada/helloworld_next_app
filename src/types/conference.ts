export interface Speaker {
  id: string;
  name: string;
  bio: string;
  sessions: Session[];
}
export interface PageProps {
  slug: string;
}
export interface Session {
  id: string;
  title: string;
  description: string;
  room: string;
  day: string;
  track: string;
  speakers: Speaker[];
}
