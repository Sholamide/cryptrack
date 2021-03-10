import React from "react";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children, title = "Cryptrack" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
