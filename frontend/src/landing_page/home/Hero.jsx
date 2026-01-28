import React from 'react';

function Hero() {
    return (
        <div className="container text-center">
            <div className="row justify-content-center ">
                <img
                    className="mb-3 mt-5"
                    style={{ width: "65%" }}
                    src="/media/images/homeHero.png"
                    alt="hero"
                />
            </div>
            <h1 className='mt-5 text-muted'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button type="button" class="btn btn-primary my-4 px-5 py-2 ">Sign up for free</button>
        </div>
    );
}

export default Hero;
