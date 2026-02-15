import React from "react";
import { useNavigate } from "react-router-dom";

function Apps() {
  const navigate = useNavigate();

  return (
    <div className=" mb-5 universe-container">
      
      {/* Heading */}
      <div className="text-center ">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted  " style={{fontSize:"18px"}} >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* LIST STYLE */}
      <div className="universe-list">

        <div className="universe-row">
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" />
          <div>
            <h6>Zerodha Fund House</h6>
            <p>
              Our asset management venture creating simple and transparent
              index funds to help you save for your goals
            </p>
          </div>
        </div>

        <div className="universe-row">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" />
          <div>
            <h6>Sensibull</h6>
            <p>
              Options trading platform to build, analyze strategies and track
              data like OI, FII/DII and more
            </p>
          </div>
        </div>

        <div className="universe-row">
          <img src="media/images/tijori.svg" alt="Tijori" />
          <div>
            <h6>Tijori</h6>
            <p>
              Investment research platform offering deep insights on stocks,
              sectors and supply chains
            </p>
          </div>
        </div>

        <div className="universe-row">
          <img src="media/images/streakLogo.png" alt="Streak" />
          <div>
            <h6>Streak</h6>
            <p>
              Systematic trading platform to create and backtest strategies
              without writing code
            </p>
          </div>
        </div>

        <div className="universe-row">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" />
          <div>
            <h6>Smallcase</h6>
            <p>
              Thematic investing platform to invest in diversified baskets of
              stocks and ETFs
            </p>
          </div>
        </div>

        <div className="universe-row">
          <img src="media/images/dittoLogo.png" alt="Ditto" />
          <div>
            <h6>Ditto</h6>
            <p>
              Personalized advice on life and health insurance — no spam and
              no mis-selling
            </p>
          </div>
        </div>

      </div>

    
    </div>
  );
}

export default Apps;