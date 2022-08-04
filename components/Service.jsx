import React, { useState } from "react";
import {
  CircleFill,
  Facebook,
  Instagram,
  SendFill,
  Tiktok,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import styles from "../styles/Service.module.css";

function Service() {

  const url=`/`
  const title="Social media video downloader"
  const shareDetails = { title, url };

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share(shareDetails)
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };

  return (
    <div>
      <div className={styles.smDescription}>
        <div className={styles.smDescription__container}>
          <h2>Social Media Video Downloader</h2>
          <p>
            Sm Downloader allows you to convert & download video from YouTube,
            Facebook, Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD quality.
            Sm Downloader supports downloading all video formats such as: MP4,
            M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily download for
            free thousands of videos from YouTube and other websites.
          </p>
        </div>

        <h4>Supported Platforms</h4>
        <div className={styles.plaftforms__container}>
          <div className={styles.supportIcons}>
            <Facebook
              style={{ color: "#1876F2" }}
              className={styles.platformIcon}
            />
          </div>
          <div className={styles.supportIcons}>
            <Youtube style={{ color: "red" }} className={styles.platformIcon} />
          </div>
          <div className={styles.supportIcons}>
            <Twitter
              style={{ color: "1D9BF0" }}
              className={styles.platformIcon}
            />
          </div>
          <div className={styles.supportIcons}>
            <Instagram
              style={{ color: "#feda75 " }}
              className={styles.platformIcon}
            />
          </div>
          <div className={styles.supportIcons}>
            <Tiktok
              style={{ color: "white" }}
              className={styles.platformIcon}
            />
          </div>
        </div>
      </div>

      <div className={styles.howToDownload}>
        <div className={styles.guidelines}>
          <div className={styles.guidelinesTitle}>
            {" "}
            <h3>How To Download</h3>
          </div>
          <p>
            1. Copy and paste the link of the video you want to download in the
            form above
          </p>
          <p>2. Click button to begin converting process</p>
          <p>
            3. Select the video/audio format you want to download, then click on
            the DOWNLOAD button
          </p>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.features__container}>
          <h3>Features</h3>
          <p>
            <CircleFill className={styles.bullet} /> No registration is required
          </p>
          <p>
            <CircleFill className={styles.bullet} /> Unlimited and free download{" "}
          </p>
          <p>
            <CircleFill className={styles.bullet} /> Fully compatible with all
            devices
          </p>
          <p>
            <CircleFill className={styles.bullet} /> High quality and speed
            download
          </p>

          <p>
            <CircleFill className={styles.bullet} /> Download videos without
            watermark
          </p>
        </div>
      </div>

      <div className={styles.share}>
        <h4>Share to Friends</h4>
        <button
          onClick={handleSharing}
          type="button"
          className={styles.share__button}
        >
          <p>Click here </p>
          <SendFill className={styles.shareIcon} />
        </button>
      </div>
    </div>
  );
}

export default Service;
