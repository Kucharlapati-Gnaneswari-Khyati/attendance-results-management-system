import React, { useRef } from 'react';

const OTP = ({ logo, logo1 }) => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const submitHandler = () => {
    const otp = inputRefs.map(ref => ref.current.value).join('');
    // Handle OTP verification logic
    console.log('OTP entered:', otp);
  };

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

      <div className='inputs-box width-sp'>
        <h6 className='box-heading'>OTP</h6>
        <label className='box-text al-ctr'>
          <br />Please enter the verification code sent to your email address.<br /><br />
        </label>
        <div className="otp-input-container otp-flex al-ctr">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              type="text"
              ref={ref}
              onChange={(e) => handleInputChange(index, e)}
              maxLength="1"
              className="small-square otp-flex"
            />
          ))}
        </div>
        <br />
        <div className='al-ctr'><br />
          <input type="submit" className='submit-button' onClick={submitHandler} />
        </div>
        <br />
      </div>
    </>
  );
};

export default OTP;
