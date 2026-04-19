import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ logo, logo1 }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    // Handle login logic here
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
        <h6 className='box-heading'>Login</h6>
        <form onSubmit={SubmitHandler} className="Login">
          <div className="option">
            <label className="role">
              <input type="radio" name="role" value="1" onChange={handleRoleChange} required />
              Student
            </label>
            <label className="role">
              <input type="radio" name="role" value="2" onChange={handleRoleChange} required />
              Faculty
            </label>
          </div>

          <p className='box-inp-head'>Email</p>
          <input
            type="email" name="email"
            value={formData.email} onChange={handleInputChange}
            className='input-row' required
          />

          <p className='box-inp-head'><br />Password</p>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password" value={formData.password}
              onChange={handleInputChange} className='input-row' required
            />
            <div className='al-rght'>
              <span onClick={togglePasswordVisibility} className='toggle-password-visibility'>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <p className='box-text al-rght fg-pw link' onClick={() => navigate('/Fp_otp')}>
            Forgot password?
          </p>
          <div className='al-ctr'>
            <input type="submit" className='submit-button' />
          </div>
        </form>
        <p className='box-text al-ctr'>
          <br />You don't have an account?{' '}
          <a className='link' href='/signup'>Register</a>
        </p>
      </div>
    </>
  );
};

export default Login;
