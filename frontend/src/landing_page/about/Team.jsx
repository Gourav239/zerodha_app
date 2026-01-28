import React from "react";

function Team() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row text-center">
        <h3>People</h3>
      </div>

      <div className="row">
        {/* Empty space (desktop only) */}
        <div className="col-lg-2 d-none d-lg-block"></div>

        {/* Image + name */}
        <div className="col-12 col-md-5 col-lg-3 mt-3 mx-md-2 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithinKamath"
            style={{
              borderRadius: "50%",
              width: "260px",
              height: "260px",
              objectFit: "cover",
            }}
          />
          <h5 className="m-4">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>

        {/* Text content */}
        <div
          className="col-12 col-md-7 col-lg-5 mx-lg-4 mt-4 mt-md-5"
          style={{ lineHeight: "2rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
