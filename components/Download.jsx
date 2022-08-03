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
import axios from "axios";
import { Drawer, Box } from "@mui/material";
import Quality from "./Quality";


function Download() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState({});
  const [videoSelected, setVideoSelected] = useState(true);
  const [audioSelected, setAudioSelected] = useState(false);
  const [resolution, setResolution] = useState({format: 'Set Quality', url: ''});
  const [selectedLink, setSelectedLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    bottom: false,
  });
  const show = false;

  const videoClick = () => {
    setVideoSelected(true);
    setAudioSelected(false);
  };

  const audioClick = () => {
    setAudioSelected(true);
    setVideoSelected(false);
  };

  const toggleMenu = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleMenu(anchor, false)}
      onKeyDown={toggleMenu(anchor, false)}
    >
      <Quality
        setSelectedLink={setSelectedLink}
        setResolution={setResolution}
        quality={results?.links}
      />
    </Box>
  );

  //https://twitter.com/PrimeVideo/status/1553018084839116801?s=20&t=UYeyPvG2Bi0zMDIVTWRAZw
  //"https://www.youtube.com/watch?v=rSn_X_Em6Vo"
  //https://www.tiktok.com/@billieeilish/video/7014570556607433990
  //https://www.instagram.com/p/CfUdVZ6jbeO/?hl=en
  //https://fb.watch/eCeZzbHmPM/
  //https://www.dailymotion.com/video/x8cpwja?playlist=x7g4o0

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (url) {
      await axios( {
        method: "post",
        url: "api/download",
        data: {
          url: url,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then(({data}) => {
        setResults(data) 
        setLoading(false);
      });
    } 
  };
  console.log(results);
  const download = async (e) => {
    e.preventDefault();
    console.log('GONE')
    if (resolution.url) {
      const response = await fetch("api/download", {
        method: "POST",
        body: JSON.stringify({
          downloadUrl: resolution?.url,
          title: results?.info?.title
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // setResults(data);
      // if (response) setLoading(false);
      console.log(data);
      
    }
  };

  return (
    <div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} className={styles.form__container}>
          <Link45deg className={styles.linkIcon} />
          <input
            type="text"
            className={styles.input}
            placeholder="Copy and paste your link here..."
            onChange={handleChange}
            value={url}
          />
          <div className={styles.searchBox} onClick={handleSubmit}>
            <CloudArrowDown className={styles.searchIcon} />
          </div>
        </form>
      </div>

      {loading && (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}

      {!!results.links && (
        <div className={styles.results}>
          <div className={styles.thumbnail}>
            <img
              src={results?.info?.thub}
              alt=""
              layout="fill"
              className={styles.results__image}
            />
          </div>
          <p className={styles.title}>{results?.info?.title}</p>
          <p className={styles.title}>{results?.info?.duration}</p>

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
                   <p>{  resolution.quality}</p> {" "} - 
                   <p>{  resolution.format}</p>
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
            <button
              onClick={download}
              type="button"
              className={styles.download__button}
            >
              <CloudArrowDown className={styles.downloadIcon} />
              Download
            </button>
          </div>
        </div>
      )}
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleMenu("bottom", false)}
      >
        {list("bottom")}
      </Drawer>
    </div>
  );
}

export default Download;
