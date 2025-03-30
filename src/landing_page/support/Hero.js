import React from 'react';

function Hero() {
    return ( 
                <section className='container-fluid' id='supportHero'>        
                    <div className=' p-5' id='SupportWrapper'>
                       <h4>Support Portal</h4>
                       <a href=''>Track tickets</a>
                    </div>

                    <div className='row p-5 m-3 ' >
                    <div className=' p-5 '>
                        <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                        <input  placeholder='Eg: how do i activate F&Q, why is my order getting rejected.... '/>
                        <br></br>
                        <a href=''>Track account </a>
                        <a href=''>opening Track </a>
                        <a href=''>segment activation </a>
                        <a href=''>Intraday margins </a>
                        <a href=''>Kite user manual </a>
                    </div>
                    <div className='col-6 p-5 '>
                        <h1 className='fs-3'>Featured</h1>
                        <ol>
                            <li> <a href=''>Current Buybacks - March 2025 </a></li>
                            <li><a href=''>Rights Entitlements listing in March 2025 </a></li>
                        </ol>
                    </div>
                       
                    </div>
                </section>
        
        
        
        
             );
        }
        
        export default Hero;
