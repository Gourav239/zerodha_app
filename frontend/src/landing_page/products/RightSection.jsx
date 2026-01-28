
import React from "react";

function RightSection({ ImgUrl, ProductName, ProductDesc, Link }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 px-5" style={{marginTop:"5rem"}}>
          <h4 className="fs-3 text-muted">{ProductName}</h4>
          <p style={{ fontSize: "17px", lineHeight: "2rem" }}>{ProductDesc}</p>
          <a href={Link} style={{ textDecoration: "none" }}>
            {Link}
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={ImgUrl} style={{
              maxWidth: "500px",  
              width: "100%",
              height: "auto",
            }}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
