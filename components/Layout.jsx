import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>SM DOWNLOADER</title>
        <link rel="icon" href="/android-chrome-maskable-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
         <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
         <meta name="theme-color" content="#df517c" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
