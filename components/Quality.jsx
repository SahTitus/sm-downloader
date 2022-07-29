import React from "react";
import { ListItem, ListItemIcon, ListItemText, List } from "@mui/material";
import styles from "../styles/Quality.module.css";
import { VolumeMuteFill } from "react-bootstrap-icons";

function Quality() {
  return (
    <div>
      <List className={styles.quality}>
        <div className={`${styles.top}`}>
          <div className={`${styles.top__container}`}>
            <h5>Resolution</h5>
            <h5>File size</h5>
          </div>
        </div>
        <div className={`${styles.options}`}>
          <ListItem className={styles.option} button style={{ color: "red" }}>
            <p>1080p - mp4</p>
            <div className={styles.file__size}>
              <p> 49.4MB</p>
              <span className={styles.mute__circle}>
                <VolumeMuteFill className={styles.mute} />
              </span>
            </div>
          </ListItem>
          <ListItem className={styles.option} button style={{ color: "red" }}>
            <p>720p - mp4</p>
            <div className={styles.file__size}>
              <p> 49.4MB</p>
              <span className={styles.mute__circle}>
                <VolumeMuteFill className={styles.mute} />
              </span>
            </div>
          </ListItem>
          <ListItem className={styles.option} button style={{ color: "red" }}>
            <p>360p - mp4</p>
            <div className={styles.file__size}>
              <p> 49.4MB</p>
              <span className={styles.mute__circle}>
                <VolumeMuteFill className={styles.mute} />
              </span>
            </div>
          </ListItem>
          <ListItem className={styles.option} button style={{ color: "red" }}>
            <p>240p - mp4</p>
            <div className={styles.file__size}>
              <p> 49.4MB</p>
              <span className={styles.mute__circle}>
                <VolumeMuteFill className={styles.mute} />
              </span>
            </div>
          </ListItem>
          <ListItem className={styles.option} button style={{ color: "red" }}>
            <p>144p - mp4</p>
            <div className={styles.file__size}>
              <p> 49.4MB</p>
              <span className={styles.mute__circle}>
                <VolumeMuteFill className={styles.mute} />
              </span>
            </div>
          </ListItem>
        </div>
      </List>
    </div>
  );
}

export default Quality;
