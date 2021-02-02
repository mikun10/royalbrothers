import React from 'react'
import '../BrothersX.css'
import BrotherImg from '../images/brotherX.png'

const Brothers = () =>{
    return(
       <>

        <section id="rbx">

<div className="rbxb">
    <article>
        <p className="rbx-intro">Introducing</p>
        <h2 className="rbx-heading">
            Royal Brothers <span className="rbx-heading-x">X</span>
        </h2>
        <div className="rbx-grid">
            <div className="rbx-item">
                <img src={BrotherImg} alt="Bikes for rent in Bangalore" className="rbx-bike"  />
            </div>
            <div className="rbx-item">
                <p className="rbx-feature--title">Now rent vehicles on monthly subscription (1-9 months)</p>

                <ul className="rbx-subGrid">
                    <li>Pay per month</li>
                    <li>Free home delivery</li>
                    <li>Sanitized bikes</li>
                    <li>Free maintenance</li>
                </ul>
                <a href="https://www.royalbrothers.com/bangalore/bike-rentals/long-term">
    <button className="rbx-button btn">EXPLORE</button>
</a> </div>
        </div>
    </article>
    </div>
</section>

  </>

    );
};

export default Brothers;