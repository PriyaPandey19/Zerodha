import React,{useState}from 'react';

function Team(){
    const [openBio, setOpenBio] = useState(null);
    return(
      <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <h1 className='text-center'>People</h1>
            </div>
            <div className='row   text-muted' style={{lineHeight: "1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5 text-center'>
                    <img src="media/images/nithinKamath.jpg"
                    style={{borderRadius: "100%", width:"50%"}}
                    />
                    <h4 className='mt-5'>Nithin Kamath</h4>
                     <h6>Founder, CEO</h6>                  
                </div>
                <div className='col-6 p-5'>
                   <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>
                    <p><a href="" style={{textDecoration:"none"}}>Connect on Homepage / TradingQnA / Twitter</a></p>

                </div>
               
            </div>



            {/* Other Team Members */}
     <div className='row text-center mt-5'>

    <div className='col-4 p-5'>
        <img src="media/images/austin.jpg"
        style={{borderRadius: "100%", width:"60%"}}
        />
        <h6 className='mt-3'>Austin Prakesh</h6>
        <p className='text-muted'>Director Strategy</p>
        <p style={{fontSize:"0.9em"}} onClick={() => setOpenBio(openBio ===1 ? null:1)}>Bio <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
        {openBio === 1 && (
            <p className='text-muted mt-2' style={{fontSize:"0.9em"}}>
                Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
            </p>
        )}
    </div>

    <div className='col-4 p-5'>
        <img src="media/images/kailash.jpg"
        style={{borderRadius: "100%", width:"60%"}}
        />
        <h6 className='mt-3'>Dr. Kailash Nadh</h6>
        <p className='text-muted'>CTO</p>
        <p style={{fontSize:"0.9em"}} onClick={() => setOpenBio(openBio ===2 ? null:2)}>Bio <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
        {openBio === 2 && (
            <p className='text-muted mt-2' style={{fontSize:"0.9em"}}>
                Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
            </p>
        )}
    </div>

    <div className='col-4 p-5'>
        <img src="media/images/venu.jpg"
        style={{borderRadius: "100%", width:"60%"}}
        />
        <h6 className='mt-3'>Venu Madhav</h6>
        <p className='text-muted'>COO</p>
        <p style={{fontSize:"0.9em"}} onClick={() => setOpenBio(openBio ===3 ? null:3)}>Bio <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
         {openBio === 3 && (
            <p className='text-muted mt-2' style={{fontSize:"0.9em"}}>
                Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.

            </p>
        )}
    </div>

</div>

<div className='row text-center'>

    <div className='col-4 p-5'>
        <img src="media/images/hanan.jpg"
        style={{borderRadius: "100%", width:"60%"}}
        />
        <h6 className='mt-3'>Hanan Delvi</h6>
        <p className='text-muted'>CCO</p>
        <p style={{fontSize:"0.9em"}}  onClick={() => setOpenBio(openBio ===4 ? null:4)}>Bio <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
        {openBio === 4 && (
            <p className='text-muted mt-2' style={{fontSize:"0.9em"}}>
                We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
            </p>
        )}
    </div>

    <div className='col-4 p-5'>
        <img src="media/images/seema.jpg"
        style={{borderRadius: "100%", width:"60%"}}
        />
        <h6 className='mt-3'>Seema Patil</h6>
        <p className='text-muted'>Director</p>
        <p style={{fontSize:"0.9em"}} onClick={() => setOpenBio(openBio ===5 ? null:5)}>Bio <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
        {openBio === 5 && (
            <p className='text-muted mt-2' style={{fontSize:"0.9em"}}>
               Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
            </p>
        )}
    </div>

    <div className='col-4 p-5'>
        <img src="media/images/karthik.jpg"
        style={{borderRadius: "100%", width:"60%"}}
        />
        <h6 className='mt-3'>Karthik Rangappa</h6>
        <p className='text-muted'>Chief of Education</p>
        <p style={{fontSize:"0.9em"}} onClick={() => setOpenBio(openBio ===6 ? null:6)}>Bio <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
         {openBio === 6 && (
            <p className='text-muted mt-2' style={{fontSize:"0.9em"}}>
               Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
            </p>
        )}
    </div>

</div>


        </div>
    );
}
export default Team;