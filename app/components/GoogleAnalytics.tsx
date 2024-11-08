import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        id="gtm"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VFYVM9PMYW"
      ></Script>
      <Script id="gtag">
        {`
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VFYVM9PMYW');
`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
