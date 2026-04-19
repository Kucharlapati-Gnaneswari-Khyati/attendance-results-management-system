import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = ({ logo, logo1 }) => {
  const [formData, setFormData] = useState({
    name: '', phonenumber: '', parentphonenumber: '', password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    // Handle signup logic here
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
        <h6 className='box-heading'>SignUp</h6>
        <form onSubmit={SubmitHandler} className="Login">
          <div className='su-row-div'>
            <div className='su-div1'>
              <p className='box-inp-head'>Name</p>
              <input type="text" className='su-input-row' name="name" value={formData.name} onChange={handleInputChange} required />

              <p className='box-inp-head'>Phone Number</p>
              <input type='tel' className='su-input-row' name="phonenumber" minLength={10} maxLength={10} value={formData.phonenumber} onChange={handleInputChange} required />

              <p className='box-inp-head'>Parent's E-mail</p>
              <input type='email' className='su-input-row' name="parentphonenumber" value={formData.parentphonenumber} onChange={handleInputChange} required />

              <p className='box-inp-head'>Password</p>
              <div className="su-password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='su-inp-pw' name="password"
                  value={formData.password} onChange={handleInputChange} required
                />
                <div className='al-rght'>
                  <span onClick={togglePasswordVisibility} className='toggle-password-visibility'>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='al-ctr'>
            <input type="submit" className='submit-button' value='Sign Up' />
          </div>
        </form>
        <p className='box-text al-ctr'><br />Already have an account? <a className='link' href='/Login'>Login</a></p>
      </div>
    </>
  );
};

export default SignUp;
