import React from 'react'
import img1 from '../images/addOne.png'
import img2 from '../images/ads_two.png'
import insurance  from '../images/vehicle-insurance.png'
import assistance from '../images/road-assistance.png'
import maintainance from '../images/bike-maintainance.png'
 


  const Insurance = () => {
      return(
          <>

          <div className='first-section' style={{marginTop:'30px',display:'flex',justifyContent:'center'}}>
              <img src={img1} alt="first"/>
              <img src={img2} alt="second"/>
              </div>

                <div className="features" style={{margin:'10px',padding:'10px', display:'flex', justifyContent:'center',flexDirection:'row'}}>
                <div className="vehicle-insurance" style={{margin:'5px',padding:'5px'}}>
                  <img src={insurance} alt="1"/>Vehicle Insurance
              </div>
              <div className="road-assistance" style={{margin:'5px',padding:'5px'}}>
              <img src={assistance} alt="2"/> 24/7 Roadside Assistance
          </div>
          <div className="bike-maintainance" style={{margin:'5px',padding:'5px'}}>
          <img src={maintainance} alt="3"/>Bike Maintainance
         </div>
                </div>

        
          </>
      );
  };

  export default Insurance;





