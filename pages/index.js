import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Navbar, Footer } from "../components";
import styles from "../styles/Home.module.css";
import {
  ChevronDown,
  CloudArrowDown,
  Download,
  Link45deg,
  Search,
  VolumeMuteFill,
} from "react-bootstrap-icons";
import Spinner from "../components/Spinner";
import { Drawer, Box } from "@mui/material";
import Quality from "../components/Quality";

function Home() {
  const [url, setUrl] = useState("");
  const [videoSelected, setVideoSelected] = useState(true);
  const [audioSelected, setAudioSelected] = useState(false);
  const [resolution, setResolution] = useState();
  const [state, setState] = useState({ bottom: false });

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

  const toggleMenu = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleMenu(anchor, false)}
      onKeyDown={toggleMenu(anchor, false)}
    >
      <Quality />
    </Box>
  );

  return (
    <div className={styles.home}>
      <div className={styles.logo}>
        <h2>SM DOWNLOADER</h2>
      </div>

      <di className={styles.form}>
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
      </di>

      {/* <di className={styles.loading}>
        <Spinner />
      </di> */}

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

      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleMenu("bottom", false)}
        onOpen={toggleMenu("bottom", true)}
      >
        {list("bottom")}
      </Drawer>
    </div>
  );
}

export default Home;
