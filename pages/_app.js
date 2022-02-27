import {useState, useEffect} from "react";
import '../styles/globals.css'
import "../styles/index.css";
import Head from "next/head";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
