import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1 >The Zerodha Universe</h1>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms </p>
            </div>
            <div className='row mt-5'>
                <div className='col-4 p-3 text-center'>
                    <img src="media/images/zerodhaFundhouse.png" alt="ZerodhaFundHouse" style={{width:"50%"}} />
                    <p className='text-small text-muted mt-3'>Our assest management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img src="media/images/sensibullLogo.svg" alt="SensibullLogo" style={{width:"70%"}} />
                   <p className='text-small text-muted mt-3'> Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>

                </div>
                <div className='col-4 p-3 text-center'>
                    <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="Tijori" style={{width:"50%"}} />
                    <p className='text-small text-muted mt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-4 p-3 text-center'>
                    <img src="media/images/streakLogo.png" alt="StreakLogo" style={{width:"50%"}} />
                    <p className='text-small text-muted mt-3'>Our assest management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img src="media/images/smallcaseLogo.png" alt="Small_Case" style={{width:"60%"}} />
                    <p className='text-small text-muted mt-3'>Our assest management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img src="media/images/dittoLogo.png" alt="DittoLogo" style={{width:"40%"}} />
                    <p className='text-small text-muted mt-3'>Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free</p>
                </div>
            </div>
            <div className='row'>
                <button
                    className="p-2 btn btn-primary fs-5  mb-5"
                    style={{ width: "15%", margin: "0 auto", padding: "2px" }}
                >
                    Sign up now
                </button>
            </div>
        </div>
     );
}

export default Universe;