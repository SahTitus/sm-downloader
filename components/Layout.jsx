import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>SM DOWNLOADER</title>
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
