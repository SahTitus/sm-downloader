import React from "react";
import { Drawer, Box, Slide, Dialog, Button } from "@mui/material";
import styles from "../styles/DownModal.module.css";
import { CloudCheckFill } from "react-bootstrap-icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ dInfo, showDownMoadal }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <div>
      <Dialog
        open={showDownMoadal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.downloadModal}>
          <div className={styles.downloadModal__container}>
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
              <p>{formatBytes(dInfo?.total)} MB</p>
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
