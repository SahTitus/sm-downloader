import React from "react";
import { Drawer, Box, Slide, Dialog, Button } from "@mui/material";
import styles from "../styles/DownModal.module.css";
import { CloudCheckFill } from "react-bootstrap-icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ dInfo, showDownMoadal }) {
  const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <div>
      <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%', height: 435, borderRadius: 3, } }}
        open={showDownMoadal}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.downloadModal}>
          <div className={styles.downloadModal__container}>
            {(dInfo.progress === 0) && <h2>Initializing...</h2> }
            {(dInfo.progress > 0.1 && dInfo.progress < 80 ) && <h2>Please wait...</h2> }
            {(dInfo.progress > 79 && dInfo.progress < 100) && <h2>Your`re almost there ...</h2> }
            {dInfo.progress === 100 && (<h2>Done</h2>) }
            <div className={`${styles.download__circle}`}>
              {!dInfo.completed ? (
                <>
                  <p>{dInfo?.progress}</p>
                  <p>%</p>
                </>
              ) : (
                <>
                <CloudCheckFill className={styles.cloudCheckFill}/>
                </>
              )}
            </div>
            <div className={styles.download__bytes}>
              {!dInfo.completed ? 
            <>
            <p>{formatBytes(dInfo?.loaded)}</p>
              <span>/</span>
              <p>{formatBytes(dInfo?.total)}</p>
            </> : <>
            <p>Enjoy Watching 😍</p>
            </>  
            }
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
