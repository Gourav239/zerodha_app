import React from "react";

function Education() {
    return (
        <div className="container my-5 pt-5 text-muted">
            <div className="row">
                <div className="col-5 mx-5">
                    <img src="media/images/education.svg" />
                </div>
                <div className="col-5 mx-5 my-5">
                    <h3 >Free and open market education</h3>
                    <p className="my-4">
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>

                    <a href=""  style={{ textDecoration: "none" }}>Varsity</a>
                    <p className="my-4">
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>TradingQ&A</a>
                </div>
            </div>
        </div>
    );
}

export default Education;
