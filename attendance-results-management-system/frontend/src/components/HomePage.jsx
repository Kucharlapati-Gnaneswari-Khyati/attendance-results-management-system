import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ logo, logo1, slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11 }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex1 bg-he'>
        <img src={logo} alt="LOGO OF ANDHRA POLYTECHNIC KAKINADA" className='logo' />
        <div className='college-head'>
          <p className='college-head1'> ANDHRA POLYTECHNIC KAKINADA <small className='q-sm'> Estd.1947 </small></p>
          <center className='college-head2'> Affiliated to the State Board of Technical Education, Vijayawada.</center>
        </div>
        <img src={logo1} alt="LOGO OF ANDHRA POLYTECHNIC KAKINADA" className='logo' />
      </div>

      <div className='width-sp'>
        <div className='flex bm'>
          <div><p className='homeh'> Andhra Polytechnic College Kakinada</p></div>
          <div className='flex'>
            <button className="submit-button1" onClick={() => navigate('/Login')}>Go&nbsp;to&nbsp;Login</button>
            <button className="submit-button1" onClick={() => navigate('/SignUp')}>Register</button>
          </div>
        </div>
        <hr />
        <p className='homebh'> About Andhra Polytechnic </p>
        <marquee behavior="slide" direction="up" hspace="1">
          <p> Efficiently track and manage attendance with our innovative system.
            Designed specifically for Andhra Polytechnic, our system ensures accurate
            recording, insightful analytics, and simplified monitoring.
          </p>
        </marquee>
        <p className='homebh'> Explore Our Attendance Manager </p>
        <marquee behavior="slide" direction="up" hspace="1">
          <p>Faculty members streamline attendance recording and alerts keep parents
            informed about their child's attendance, with printable letters for
            inadequate attendance, fostering student success and well-being.</p>
        </marquee>
        <marquee behavior="slide" direction="up" hspace="1">
          <p className='homebh'> Campus Life in Images </p>
        </marquee>
        <marquee behavior="slide" direction="up" hspace="1">
          <center>
            <img className='img1' src={slider9} alt="campus" />
            <img className='img1' src={slider8} alt="campus" />
            <img className='img1' src={slider11} alt="campus" />
            <img className='img1' src={slider6} alt="campus" />
          </center>
        </marquee>
        <marquee behavior="slide" direction="up" hspace="1">
          <center>
            <img className='img1' src={slider5} alt="campus" />
            <img className='img1' src={slider2} alt="campus" />
            <img className='img1' src={slider10} alt="campus" /><br />
          </center>
        </marquee>
        <marquee behavior="slide" direction="up" hspace="1">
          <center>
            <img className='img1' src={slider7} alt="campus" />
            <img className='img1' src={slider1} alt="campus" />
            <img className='img1' src={slider3} alt="campus" />
            <img className='img1' src={slider4} alt="campus" />
          </center>
        </marquee>
        <br /><br />
      </div>

      <marquee id="kkd" behavior="alternate" direction="left" scrollamount="8">
        <b id="cw">ADDRESS: ANDHRA POLYTECHNIC, YANAM ROAD, JAGANNAICKPUR, KAKINADA-533002. PH: 0884-2376192</b>
      </marquee>
      <footer>
        <center>Copyright © 2023 Attendance Manager. All Rights Reserved.</center>
      </footer>
    </>
  );
};

export default HomePage;
