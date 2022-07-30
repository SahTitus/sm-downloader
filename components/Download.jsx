import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  CloudArrowDown,
  Link45deg,
  VolumeMuteFill,
} from "react-bootstrap-icons";
import styles from "../styles/Download.module.css";
import Spinner from "../components/Spinner";

function Download() {
  const [url, setUrl] = useState("");
  const [videoSelected, setVideoSelected] = useState(true);
  const [audioSelected, setAudioSelected] = useState(false);
  const [resolution, setResolution] = useState();
  const show = false;

  const videoClick = () => {
    setVideoSelected(true);
    setAudioSelected(false);
  };

  const audioClick = () => {
    setAudioSelected(true);
    setVideoSelected(false);
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSelectResol = (e) => {
    setResolution(e.target.value);
  };

  return (
    <div>
      <div className={styles.form}>
        <form className={styles.form__container}>
          <Link45deg className={styles.linkIcon} />
          <input
            type="text"
            className={styles.input}
            placeholder="Copy and paste your link here..."
            onChange={handleChange}
            value={url}
          />
          <div className={styles.searchBox}>
            <CloudArrowDown className={styles.searchIcon} />
          </div>
        </form>
      </div>

      {/* <di className={styles.loading}>
        <Spinner />
      </di> */}

      {show && (
        <div className={styles.results}>
          <div className={styles.thumbnail}>
            <Image
              src="https://images.pexels.com/photos/7153942/pexels-photo-7153942.jpeg?cs=srgb&dl=pexels-vlada-karpovich-7153942.jpg&fm=jpg"
              alt=""
              layout="fill"
              className={styles.results__image}
            />
          </div>
          <p className={styles.title}>
            Simon Sinek`s Life Advice Will Change Your Future — Most Underrated
            Speech
          </p>

          <div className={styles.resolutions}>
            <div className={styles.video__format}>
              <div
                onClick={videoClick}
                className={`${styles.video__formatOption} ${
                  videoSelected && styles.selectFormat
                }`}
              >
                {" "}
                <h4>Video</h4>
              </div>
              <div
                onClick={audioClick}
                className={`${styles.video__formatOption} ${
                  audioSelected && styles.selectFormat
                }`}
              >
                <h4>Audio</h4>
              </div>
            </div>
            <div className={styles.videoInfo}>
              <div
                onClick={toggleMenu("bottom", true)}
                className={styles.resolu__container}
              >
                <div className={styles.resolu__select}>
                  <p>1080p - mp4</p>
                  <div className={styles.file__size}>
                    <p> 49.4MB</p>
                    <span className={styles.mute__circle}>
                      <VolumeMuteFill className={styles.mute} />
                    </span>
                  </div>
                </div>
                <div className={styles.arrowDownBox}>
                  <ChevronDown className={styles.arrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.download__box}>
            <button type="button" className={styles.download__button}>
              <Download className={styles.downloadIcon} />
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Download;
