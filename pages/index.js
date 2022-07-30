import React, { useState } from "react";
import { Download, Quality, Service } from "../components";
import styles from "../styles/Home.module.css";
import { Drawer, Box } from "@mui/material";

function Home() {
  const [state, setState] = useState({ bottom: false });

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
      <div className={styles.top__title}>
        <h1>SM DOWNLOADER</h1>
        <h4>
          Dynamically download all your social media videos into your gallery by
          copying and pasting the video`s link into the form below 👇👇👇
        </h4>
      </div>
      <Download />
      <Service />

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
