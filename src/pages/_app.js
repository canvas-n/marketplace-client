import React, { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Script from "next/script";
import { queryClient } from "@/react-query/queryClient";

// test commit
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://tshop.canvasn.co.kr/favicon.ico"
          type="image/x-icon"
        />
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta name="author" content="CANVASN" />
        <meta name="generator" content="CANVASN" />
        <meta name="keyword" content="CANVASN" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CANVASN" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="CANVASN" />
        <meta property="og:image:alt" content="CANVASN" />
        <meta
          property="og:image"
          content="https://tshop.canvasn.co.kr/og.png"
        />
        <meta property="og:description" content="CANVASN" />
        <meta property="og:url" content="https://tshop.canvasn.co.kr/" />

        <meta itemprop="headline" content="CANVASN" />
        <meta itemprop="description" content="CANVASN" />
        <meta itemProp="image" content="https://tshop.canvasn.co.kr/og.png" />
        <meta name="thumbnail" content="https://tshop.canvasn.co.kr/og.png" />

        <title>CANVASN NFT</title>
        <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
            integrity="sha384-yJpxAFV0Ip/w63YkZfDWDTU6re/Oc3ZiVqMa97pi8uPt92y0wzeK3UFM2yQRhEom"
            crossOrigin="anonymous"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
