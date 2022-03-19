import React from 'react';
import "./Home.css"


const Home = () => {
    return (
        <React.Fragment>
        <div className='home'>
            <div className='nav'>
                <ul>
                    <li><a href="">RATES & FEES</a></li>
                    <li><a href="">LOGIN</a></li>
                    <li><a href="">SIGN UP</a></li>
                </ul>
            </div>
            <div className='center'>
                <h3>TODAY'S LIVE RATE (1 AUD)</h3>
                <h1>RS 54.9</h1>
            </div>
        </div>
        <div className='about'>
            <div className='leftside'>
                <h3>ABOUT US</h3>
                <p>Moneyfirst Was Born Of Frustration</p>
                <p>Moneyfirst was founded on 2019 in Australia since then the team have worked on making transfers easy and secure.Sending money abroad is deceptively expensive, thanks to the hidden charges we’ve all been forced to pay. The banks claim “free money transfers”, “0% commission.” Sounds like money’s already flowing freely, but far from it. Its pure propaganda.

Moneyfirst removes all the wrongness, letting people send money abroad at the lowest possible true cost. Using only real exchange rates and tiny not-hidden-fees. Headaches averted, and a revolution sparked.

</p>
<h4>Moneyfirst Team</h4>
            </div>
            <img src="	https://moneyfirst.com.au/img/screens/screen-3.png" alt="" />
        </div>
        <div className="services home">
<h1>OUR SERVICES</h1>
<div className='info'>
<div className='infodetail'>
    <h3>EXCHANGE RATE</h3>
    <p>We update our exchange rates every while to give our user satisfied price</p>
</div>
<div className='infodetail'>
    <h3>APPLICATION</h3>
    <p>we have both ios and android apps and web application which our easy to use and safe for your money</p>
</div>
<div className='infodetail'>
    <h3>INSTANT TRANSFER</h3>
    <p>lIghtning tranfers we send your funds within a blink of eye to recipient</p>

</div>
<div className='infodetail'>
    <h3>SUPPORT</h3>
    <p>We have admins who are always ready to help you in any issue.We beleive in having a good bond with customers</p>
</div>
</div>
        </div>
        </React.Fragment>
    );
};

export default Home;