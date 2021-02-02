import React from "react";
import '../Fleet.css'

const Fleet = () =>{
  return(
    <>
    
    <section id="fleet">
        <h1 className="fleet-h1">Our Fleet</h1>
        <main>
          <div className="our-fleet--duration">
            <label htmlFor="cars">Duration &nbsp;</label>
            <select name="time" id="time">
              <option value="hourly">Hourly</option>
              <option value="7days">7 Days</option>
              <option value="15days">15 Days</option>
              <option value="3month">3 months</option>
              <option value="1month">1 months</option>
            </select>
          </div>
          <div className="product">
            <ul className="ul-cls" style={{marginRight:'7rem', width:'100% auto'}}>
              <li>
                <h3 style={{textAlign: 'center',fontSize:'15px' ,fontWeight:'bold',lineHeight:'23px',color:'rgba(0,0,0,0.87)'}}>Honda Activa 3G</h3>
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/Activa_3G-min_2.png?1519738389" alt="Honda Activa 3G" />
                <h2 style={{textAlign: 'center'}}>12/Hour</h2>
                <button href="#" className="btn-book" >Book Now</button>
              </li>
              <li>
                <h3 style={{textAlign: 'center',fontSize:'15px' ,fontWeight:'bold',lineHeight:'23px',color:'rgba(0,0,0,0.87)'}}>Honda Activa 3G</h3>
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/Activa_3G-min_2.png?1519738389" alt="Honda Activa 3G" />
                <h2 style={{textAlign: 'center'}}>12/Hour</h2>
                <button href="#" className="btn-book">Book Now</button>
              </li>
              <li>
                <h3 style={{textAlign: 'center',fontSize:'15px' ,fontWeight:'bold',lineHeight:'23px',color:'rgba(0,0,0,0.87)'}}>Royal Enfield Classic 350</h3>
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/007/medium/Classic_350-1-min_2.png?1519738687" alt="Rent Royal Enfield Classic 350" />
                <h2 style={{textAlign: 'center'}}>12/Hour</h2>
                <button href="#" className="btn-book">Book Now</button>
              </li>
              <li className="last" style={{background:'#7b7c7d'}}>
              <h3 className="last" style={{textAlign: 'center',fontSize:'15px' ,fontWeight:'bold',lineHeight:'23px',color:'rgba(0,0,0,0.87)'}}>Royal Enfield Classic 350</h3>
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/007/medium/Classic_350-1-min_2.png?1519738687" alt="Rent Royal Enfield Classic 350" />
                <h2 style={{textAlign: 'center'}}>12/Hour</h2>
                <button href="#" className="btn-book">Book Now</button>
              </li>
            </ul>
          </div>
        </main>
        <p style={{fontSize: '1.2rem', fontWeight: 280, margin: 0, textAlign: 'center'}}>* Excluding of all taxes</p>
      </section>
    </>
  );
};

export default Fleet;