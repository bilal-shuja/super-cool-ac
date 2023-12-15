import React from 'react';
import worldMap from '../../img/worldMap.svg'

const AboutUs = () => {
  return (
    <>
    <section>
        <div className="container p-1 mt-5 mb-5">
            <div className="row">
                <div className='col-lg-7'>

                    <h3 style={{fontSize:"2em", fontWeight:"600" , fontFamily:"serif"}}>About us &nbsp;
                    <i className="fa-solid fa-exclamation fw-bolder"/>
                    </h3>

                    <p style={{fontFamily:"initial", lineHeight:"1.7em"}}>
                    Welcome to <span className='fw-bold'> <q>Diakool Air Conditioners</q></span>, where innovation meets excellence in cooling technology. As a pioneering force in the industry, we pride ourselves on delivering cutting-edge air conditioning 
                    solutions designed to elevate your comfort. Our commitment to precision engineering, energy efficiency, and sleek design ensures that Diakool becomes an integral part of your living or working environment. Experience a new era of sophisticated 
                    cooling with <span className='fw-bold'> <q>Diakool Air Conditioners.</q></span>
                    </p>
                </div>
                <div className='col-lg-5'>
                        <img className='img-fluid' src={worldMap} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs