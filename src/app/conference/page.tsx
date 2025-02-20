import Link from "next/link";
import React from "react";
import ConferencePic from "../../images/media-image-1.jpg";
import styles from "./conference.module.css";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ConferencePic}
          alt="Conference pic"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to Conference page</h1>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/speakers">
          View Speakers
        </Link>
      </h2>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/sessions">
          View Sessions
        </Link>
      </h2>
    </>
  );
}
