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

const reqUrl = 'https://api.videodownloaderpro.net/api/convert'

function Download() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState({});
  const [videoSelected, setVideoSelected] = useState(true);
  const [audioSelected, setAudioSelected] = useState(false);
  const [resolution, setResolution] = useState({format: 'Set Quality',});
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
        quality={results?.url}
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
    e.preventDefault();
    setLoading(true);
    if (url) {
      await axios( {


            method: "post",
            url: reqUrl,
            data: {
              url: url,
            },
        })
        .then(({ data}) => {
            setResults(data) 
            setLoading(false);
        
        }).catch(error=> console.log(error))
      // .then(({data}) => {
      //   setResults(data) 
      //   setLoading(false);
      // });
    } 
  };
  console.log(results);
  const download = async (e) => {
    e.preventDefault();
    console.log('GONE')
    if (resolution.url) {

      const response = await axios({
        method: 'GET',
        responseType: 'blob',
        url: "https://private-cors-server.herokuapp.com/" + resolution.url,
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${results?.meta?.title}.mp4`);
        document.body.appendChild(link); 
        link.click();
        // 5. Clean up and remove the link
        link.parentNode.removeChild(link);

    
      console.log(response);
      })
 }
 };












console.log(resolution)
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

      {!!results.url && (
        <div className={styles.results}>
          <div className={styles.thumbnail}>
            <img
              src={results?.thumb}
              alt=""
              layout="fill"
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
                   <p>{  resolution?.quality || resolution?.subname || resolution?.name}</p> &nbsp;  - 
                  
                   <p>{  resolution.name}</p>
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

<a   href="https://rr4---sn-p5qs7nzy.googlevideo.com/videoplayback?expire=1659994466&amp;ei=Ai3xYpOANYKQhwbjiaiwDQ&amp;ip=216.131.105.137&amp;id=o-ANqqSvk86uQp5tnyC4eDp9SLz3J62Awc7Wi-9lrxrcYr&amp;itag=22&amp;source=youtube&amp;requiressl=yes&amp;mh=9K&amp;mm=31%2C29&amp;mn=sn-p5qs7nzy%2Csn-p5qlsn7l&amp;ms=au%2Crdu&amp;mv=m&amp;mvi=4&amp;pl=25&amp;initcwndbps=916250&amp;spc=lT-KhquPfUxWq5nNAKsX-S7yEbB3QzM&amp;vprv=1&amp;mime=video%2Fmp4&amp;ns=zY_efpyzg6BDeVlN9Vo5SQIH&amp;cnr=14&amp;ratebypass=yes&amp;dur=56.865&amp;lmt=1658770377609109&amp;mt=1659972540&amp;fvip=1&amp;fexp=24001373%2C24007246&amp;c=WEB&amp;rbqsm=fr&amp;txp=5532434&amp;n=ciA7wDpj4ff7Kw&amp;sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&amp;sig=AOq0QJ8wRAIgCuQNMax6YM9W-fH84bod85mmxZ2PTbQQ1hqevACIIUwCIHWpkMXmxAlvjg1AYD9UW87qwIiCg9YGE_9onaoGvD8I&amp;lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&amp;lsig=AG3C_xAwRQIhANwT7MGoj25pUfJ58chZhRUKuxNBpeF3sYNW4IqHW042AiBETwhQaKvwJKmKGKGszi20iW0FgH7qnfHh8vwQNoYRnw%3D%3D&amp;title=kk" >Download</a>
<a   href="https://rr2---sn-aigzrney.googlevideo.com/videoplayback?expire=1659993809&amp;ei=cSrxYtXmKsiyyQXn4In4CQ&amp;ip=185.108.107.82&amp;id=o-ADNed2XktYdtKWRr8Vt76tfiOKGGAPI8HnMw6g0NHxTg&amp;itag=18&amp;source=youtube&amp;requiressl=yes&amp;spc=lT-Khh5DaE2YKeFktnGDmrqdgrCOu-A&amp;vprv=1&amp;mime=video%2Fmp4&amp;ns=FqOK87rQb1u0a0UWdOYKxugH&amp;gir=yes&amp;clen=11431467&amp;ratebypass=yes&amp;dur=132.934&amp;lmt=1659841016884299&amp;fexp=24001373,24007246&amp;c=WEB&amp;rbqsm=fr&amp;txp=5538434&amp;n=HYL5NQo_eNy7PQ&amp;sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&amp;sig=AOq0QJ8wRQIhALNwkU9wMn0_xiZWRuBz_dYx4eLlzJNVtIK0Jw6j0r20AiBaa8nOO_j3bbuQsvacJ5iVA_mtH90i7ScMU5XM7djyeQ%3D%3D&amp;rm=sn-gxuog0-n8vl76,sn-ixhl7l&amp;req_id=1fb3c8a0c719a3ee&amp;cmsv=e&amp;redirect_counter=2&amp;cms_redirect=yes&amp;ipbypass=yes&amp;mh=ag&amp;mip=154.160.2.113&amp;mm=29&amp;mn=sn-aigzrney&amp;ms=rdu&amp;mt=1659974468&amp;mv=m&amp;mvi=2&amp;pl=24&amp;lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&amp;lsig=AG3C_xAwRgIhAIOs1jNGJJrXNJQ3oxzc9e1XlNHvgFfMD6qfUKQQLs9MAiEA3SjMSWNdhdD5TYMNd1cPpeEPaSjimifxoEBZzfVt00g%3D&amp;title=Ra" >Download</a>
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
