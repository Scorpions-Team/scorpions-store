import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Scorpions Team</title>
        <meta name="description" content="Professional web developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="w-screen h-screen">
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </main>
    </>
  );
};

export default Layout;
