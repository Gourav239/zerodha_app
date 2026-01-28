<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";

function LeftSection({
  ImgUrl,
  ProductName,
  ProductDesc,
  GooglePlay,
  AppStore,
  LinkA,
  LinkB,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6 my-3">
          <img
            src={ImgUrl}
            style={{
              maxWidth: "500px",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="col-4 px-4 my-5 pt-3">
          <h4 className="fs-3 mb-4 text-muted">{ProductName}</h4>
          <p style={{ fontSize: "17px", lineHeight: "2rem" }}>{ProductDesc}</p>
          <div>
            <a href={LinkA} style={{ textDecoration: "none" }}>
              {LinkA}
            </a>
            <a
              href={LinkB}
              style={{ textDecoration: "none", marginLeft: "5rem" }}
            >
              {LinkB}
            </a>
          </div>
          <div className="mt-4 fs-6">
            <a href={GooglePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={AppStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
=======
import React from 'react';
=======
import React from "react";
>>>>>>> e80e6265 (product part is done)

function LeftSection({
  ImgUrl,
  ProductName,
  ProductDesc,
  GooglePlay,
  AppStore,
  LinkA,
  LinkB,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6 my-3">
          <img
            src={ImgUrl}
            style={{
              maxWidth: "500px",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="col-4 px-4 my-5 pt-3">
          <h4 className="fs-3 mb-4 text-muted">{ProductName}</h4>
          <p style={{ fontSize: "17px", lineHeight: "2rem" }}>{ProductDesc}</p>
          <div>
            <a href={LinkA} style={{ textDecoration: "none" }}>
              {LinkA}
            </a>
            <a
              href={LinkB}
              style={{ textDecoration: "none", marginLeft: "5rem" }}
            >
              {LinkB}
            </a>
          </div>
          <div className="mt-4 fs-6">
            <a href={GooglePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={AppStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
<<<<<<< HEAD
>>>>>>> 728a61b6 (home and about part is done for frontend)
=======
>>>>>>> e80e6265 (product part is done)
