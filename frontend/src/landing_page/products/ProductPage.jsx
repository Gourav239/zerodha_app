
import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
  return (
    <>
      <Hero />
      <hr style={{width:"80%",marginLeft:"10%"}}></hr>
      <LeftSection
        ImgUrl="media/images/kite.png"
        ProductName="Kite"
        ProductDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        GooglePlay=""
        AppStore=""
        LinkA="Try Demo"
        LinkB="Learn More"
      />
       <RightSection
        ImgUrl="media/images/console.png"
        ProductName="Console"
        ProductDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Link="Try Demo"
      />
      <LeftSection
        ImgUrl="media/images/coin.png"
        ProductName="Coin"
        ProductDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        GooglePlay=""
        AppStore=""
        LinkA="Coin"
        LinkB=""
      />
       <RightSection
        ImgUrl="media/images/kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Link="Kite Connect"
      />
      <LeftSection
        ImgUrl="media/images/varsity.png"
        ProductName="Varsity mobile"
        ProductDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        GooglePlay=""
        AppStore=""
        LinkA=""
        LinkB=""
      />
      <p className="fs-5 mt-5 text-center text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;

