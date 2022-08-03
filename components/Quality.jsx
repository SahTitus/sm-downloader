import React from "react";
import { ListItem, List } from "@mui/material";
import styles from "../styles/Quality.module.css";
import { VolumeMuteFill } from "react-bootstrap-icons";

function Quality({quality, setResolution}) {



  return (
    <div>
      <List className={styles.quality}>
        <div className={`${styles.top}`}>
          <div className={`${styles.top__container}`}>
            <h5>Resolution</h5>
            <h5>File size</h5>
          </div>
        </div>
        
        {quality?.map((quality, i) => (
                <div onClick={()=>  setResolution(quality)} key={i} className={`${styles.options}`}>
                <ListItem className={styles.option} button style={{ color: "red" }}>
                  <p>{quality.quality}</p> - 
                  <p>{quality.format}</p>
                  <div className={styles.file__size}>
                    <p> 49.4MB</p>
                    <span className={styles.mute__circle}>
                      <VolumeMuteFill className={styles.mute} />
                    </span>
                  </div>
                </ListItem>
      
              </div>
              ) )}

      
      </List>
    </div>
  );
}

export default Quality;
