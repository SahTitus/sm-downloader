import React, { useEffect, useState, useRef } from "react";
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
import DownModal from "./DownModal";

const downInfo = {
  completed: false,
  progress: 0,
  loaded: 0,
  total: 0,
}

const reqUrl = "https://api.videodownloaderpro.net/api/convert";

function Download() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState({});
  const [videoSelected, setVideoSelected] = useState(true);
  const [audioSelected, setAudioSelected] = useState(false);
  const [resolution, setResolution] = useState({ format: "Set Quality" });
  const [selectedLink, setSelectedLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDownMoadal, setShowDownMoadal] = useState(false);
  const [state, setState] = useState({
    bottom: false,
  });
  const [downloadingState, setDownloadingState] = useState(downInfo);

  const resultsRef = useRef()
  

resultsRef.current?.scrollIntoView({behavior: 'smooth'})

const audio = results?.url?.filter((result) => !result?.audio ? result?.audio : result)
const videos = results?.url?.filter((result) => result?.audio ? !result?.audio : result)

const [quality, setQuality] = useState(videos);

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
    if (videoSelected) {
      setQuality(videos)
    } else {
      setQuality(audio)
    }
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
        quality={quality}
        sd={results?.sd}
        hd={results?.hd}
        hosting={results?.hosting}
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
    if (e) e.preventDefault();
    setLoading(true);
    if (url) {
      await axios({
        method: "post",
        url: reqUrl,
        data: {
          url: url,
        },
      })
        .then(({ data }) => {
          setResults(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
        setLoading(false);
    }
  };

  useEffect(() => {
    if (url) handleSubmit()
  }, [url])


  const download = async (e) => {
    e.preventDefault();
    setShowDownMoadal(true)
    if (resolution.url) {
      const response = await axios({
        url: "https://cors-everywhere-my.herokuapp.com/" + resolution.url,
        method: "GET",
        // headers: {
        //         'Content-Type': 'video/mp4',
        //       },
        responseType: "blob",
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          setDownloadingState({
            progress: Math.round((loaded * 100) / total),
            loaded,
            total,
            completed: false,
          });
        },
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${results?.meta?.title}.${resolution.ext}`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        setDownloadingState(info => ({
          ...info,
          completed: true,
        }));

        setTimeout(() => {setShowDownMoadal(false)}, 3000)
      });
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
          <div ref={resultsRef} />
          <Spinner />
        </div>
      )}

      {!!results.url && (
        <div className={styles.results}>
          
          <div className={styles.thumbnail}>
            <img
              src={results?.thumb}
              alt=""
              className={styles.results__image}
            />
          </div>
          <p className={styles.title}>{results?.meta?.title}</p>
          <p className={styles.title}>{results?.meta?.duration}</p>

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
                  <p>
                    {resolution?.quality ||
                      resolution?.subname ||
                      resolution?.name}
                  </p>{" "}
                  &nbsp; <p>{resolution.name}</p>
                  <p>{resolution.format}</p>
                  <div className={styles.file__size}>
                    {/* <p> 49.4MB</p> */}
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

      <DownModal showDownMoadal={showDownMoadal} dInfo={downloadingState} />

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
