import React from 'react';

function RightSection({imageURL, productName, productDescription,LearnMore}){
    return(
        <div className='container mt-5'>
            <div className='row align-items-center'>

                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    
                    
                    <a href={LearnMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>   </a>
                    </div>
                  
                <div className='col-6 text-center '>
                    <img src={imageURL}/>   
                    
                </div>
            </div>
        </div>
    );
}
export default RightSection;