import React from "react";
import { ListItem, List } from "@mui/material";
import styles from "../styles/Quality.module.css";
import { MusicNoteBeamed, VolumeMuteFill } from "react-bootstrap-icons";

function Quality({quality, setResolution, sd, hd, hosting}) {



  return (
    <div>
      <List className={styles.quality}>
        <div className={`${styles.top}`}>
          <div className={`${styles.top__container}`}>
            <h5>Resolution</h5>
            {/* <h5>File size</h5> */}
          </div>
        </div>
        
        {quality?.map((quality, i) => (
                <div onClick={()=>  setResolution(quality)} key={i} className={`${styles.options}`}>
                <ListItem className={styles.option} button style={{ color: "red" }}>
                  {(hosting === "vimeo.com" && <p>{quality?.subname}</p>) } 
                  {(hosting === "101" && <p>{quality?.quality}</p>) }
                  {(hosting === "facebook.com" && <p>{quality?.subname}</p>) } 
                  {(hosting === "tiktok.com" && <p>{quality?.subname}</p>) } 
                  {(hosting === "twitter.com" && <p>{quality?.quality}</p>) }

                  <p>{quality?.audio ? <MusicNoteBeamed /> : quality.name} </p>
                  <div className={styles.file__size}>
                    {/* <p> 49.4MB</p> */}
                    {quality.no_audio && 
                    <span className={styles.mute__circle}>
                     <VolumeMuteFill className={styles.mute} />
                    </span>
}
                  </div>
                </ListItem>
      
              </div>
              ) )}

      
      </List>
    </div>
  );
}

export default Quality;
