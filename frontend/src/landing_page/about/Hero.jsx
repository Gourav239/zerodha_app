import React from "react";

function Hero() {
  return (
    <>
      <div className="container mb-5" style={{ lineHeight: "1.8rem" }}>
        <div className="row text-center m-5 p-5">
          <h4 className="fs-3 text-muted">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h4>
        </div>
        <hr style={{width:"80%",marginLeft:"10%",marginBottom:"5rem"}}></hr>
        <div className="row mx-5 px-5">
          <div className="col-1"></div>
          <div className="col-5 px-4">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-5 px-4">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href="" style={{ textDecoration: "none" }}>
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
