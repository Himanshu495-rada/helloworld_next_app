import Link from "next/link";
import React from "react";
import Image from "next/image";
import OurStoryPic from "../../images/our-story-image-1.jpg";
import styles from "./home.module.css";

export default function page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={OurStoryPic}
          alt="Our Story"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>

      <div>
        <Link href="/" prefetch={false}>
          Back to main page
        </Link>
      </div>
    </>
  );
}
