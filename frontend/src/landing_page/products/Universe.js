import React from 'react';
import { useNavigate } from "react-router-dom";


function Universe(){
    const navigate = useNavigate();
    return(
        <div className='container mt-5'>

            <div className='row text-center mb-5'>
                <h1 className='text-muted mt-5'>The Zerodha Universe</h1>
                <p className='text-muted'>Extends your trading and investment experience even further with our partner platforms</p>
                </div>

               <div className='row text-center'>
                <div className='col-md-4 mb-5'>
                    <img src='media/images/zerodhaFundhouse.png' className='universe-logo'/>
                    <p className='text-small text-muted'>Our assest managment venture that is creating simple and transparent index funds to help you save for your goals</p>
                </div>
                <div className='col-md-4 mb-5'>
                    <img src='media/images/sensibullLogo.svg'className='universe-logo'/>
                    <p className='text-small text-muted'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-md-4 mb-5'>
                    <img src='media/images/smallcaseLogo.png'className='universe-logo'/>
                    <p className='text-small text-muted'>Thematic investing platform that helps you invest in diversified baskets of sockets on ETFs.</p>
                </div>
                <div className='col-md-4 mb-5'>
                    <img src='media/images/streakLogo.png'className='universe-logo'/>
                    <p className='text-small text-muted'>Systematic trading platform that allows you create and backtest strategies without coding.</p>
                </div>
                <div className='col-md-4 mb-5'>
                    <img src='media/images/dittoLogo.png'className='universe-logo'/>
                    <p className='text-small text-muted'>Personalized advice on life and health insurance. No spam and no mis-selling</p>
                </div>
                <div className='col-md-4 mb-5'>
                    <img src='media/images/tijori.svg'className='universe-logo'/>
                    <p className='text-small text-muted'>Investment research platform that offers detailed insights on stocks, sectors, supplychains, and more.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}} onClick= {() => navigate("/signup")}>Signup</button>
             </div>
        </div>
    );
}
export default Universe;