import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Sub_Admin_Dashboard from './Sub_Admin_Dashboard';
import Sub_Admin_Dash from './Sub_Admin_Dash';
import Verify_User from './Verify_User';
import View from './View';
import Releved from './Releved';

const AdminDashboard = ({ logo, logo1, userName, logout }) => {
  const [activeTab, setActiveTab] = useState('attendanceAndResults');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
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

      <div className="dashboard-container">
        <div className="dashboard">
          <div className="dashboard-header">
            <div className="flex">
              <h2 color='white'>Dashboard</h2>
              <div className='flex'>
                <big className="st-name">{userName}</big>
                <span className="user-circle">
                  <FaUser className="user-icon" />
                </span>
              </div>
            </div>

            <div className='flex'>
              <div className="dashboard-buttonss flex">
                <button
                  className={`dashboard-button ${activeTab === 'attendanceAndResults' ? 'active' : ''}`}
                  onClick={() => handleTabSelect('attendanceAndResults')}
                  style={{
                    background: activeTab === 'attendanceAndResults' ? '#012641' : 'white',
                    color: activeTab === 'attendanceAndResults' ? 'white' : 'black'
                  }}>
                  Post Attendance &amp; Results
                </button>
                <button
                  className={`dashboard-button ${activeTab === 'question' ? 'active' : ''}`}
                  onClick={() => handleTabSelect('question')}
                  style={{
                    background: activeTab === 'question' ? '#012641' : 'white',
                    color: activeTab === 'question' ? 'white' : 'black'
                  }}>
                  Attendance Report
                </button>
                <button
                  className={`dashboard-button ${activeTab === 'verifyuser' ? 'active' : ''}`}
                  onClick={() => handleTabSelect('verifyuser')}
                  style={{
                    background: activeTab === 'verifyuser' ? '#012641' : 'white',
                    color: activeTab === 'verifyuser' ? 'white' : 'black'
                  }}>
                  Approve User
                </button>
                <button
                  className={`dashboard-button ${activeTab === 'viewuser' ? 'active' : ''}`}
                  onClick={() => handleTabSelect('viewuser')}
                  style={{
                    background: activeTab === 'viewuser' ? '#012641' : 'white',
                    color: activeTab === 'viewuser' ? 'white' : 'black'
                  }}>
                  View Attendance &amp; Results
                </button>
                <button
                  className={`dashboard-button ${activeTab === 'Releved' ? 'active' : ''}`}
                  onClick={() => handleTabSelect('Releved')}
                  style={{
                    background: activeTab === 'Releved' ? '#012641' : 'white',
                    color: activeTab === 'Releved' ? 'white' : 'black'
                  }}>
                  Relieved Students
                </button>
                <button className="dashboard-button" onClick={logout}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="data-table">
          {activeTab === 'attendanceAndResults' ? <Sub_Admin_Dashboard /> : null}
          {activeTab === 'question' ? <Sub_Admin_Dash /> : null}
          {activeTab === 'verifyuser' ? <Verify_User /> : null}
          {activeTab === 'viewuser' ? <View /> : null}
          {activeTab === 'Releved' ? <Releved /> : null}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
