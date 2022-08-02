import React, { useState } from "react";
import { Download, Quality, Service } from "../components";
import styles from "../styles/Home.module.css";

function Home() {

  return (
    <div className={styles.home}>
      <div className={styles.top__title}>
        <h1>SM DOWNLOADER</h1>
        <h4>
          Dynamically download all your social media videos into your gallery by
          copying and pasting the video`s link into the form below
        </h4>
      </div>
      <Download />
      <Service />
    </div>
  );
}

export default Home;
