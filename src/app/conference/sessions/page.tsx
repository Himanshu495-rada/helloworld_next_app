import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>Sessions</h1>
      <div>
        <Link href="/conference">Back to conference</Link>
      </div>
    </div>
  );
}
