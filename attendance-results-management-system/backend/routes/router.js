const express = require('express');
const router = express.Router();
const {
  signup,
  verifyusers,
  adminlogin,
  getstusemmarks1,
  getstusemmarks2,
  updatesemmarks2,
  admviewresults1,
  admviewresults2,
  getMidmarks,
  admviewresults,
  updatesemmarks1,
  tfotp,
  tchangepassword,
  transferatt,
  yearlyemail,
  updateMidmarks,
  fetchdet,
  deletestudents,
  getstuattendance,
  admviewattendance,
  absentees,
  absemail,
  monthlyf,
  monthlys,
  getprint,
  login,
  updateMultipleAttendance,
  changepassword,
  approveusers,
  declineusers,
  otp,
  enteredotp,
  fotp
} = require('../controllers/userControllers');

// Auth routes
router.post('/signup', signup);
router.get('/verifyusers', verifyusers);
router.get('/login/:email/:password', login);
router.get('/adminlogin/:email/:password', adminlogin);

// OTP & Password
router.post('/otp', otp);
router.post('/enteredotp', enteredotp);
router.post('/fotp', fotp);
router.post('/tfotp', tfotp);
router.post('/changepassword', changepassword);
router.post('/tchangepassword', tchangepassword);

// User management
router.post('/approveusers', approveusers);
router.post('/declineusers', declineusers);
router.post('/deletestudents', deletestudents);
router.post('/fetchdet', fetchdet);

// Attendance routes
router.get('/getstuattendance/:pinnumber', getstuattendance);
router.post('/updateMultipleAttendance', updateMultipleAttendance);
router.post('/admviewattendance', admviewattendance);
router.post('/absentees', absentees);
router.post('/absemail', absemail);
router.post('/transferatt', transferatt);
router.post('/monthlyf', monthlyf);
router.post('/monthlys', monthlys);
router.post('/yearlyemail', yearlyemail);
router.post('/getprint', getprint);

// Results routes
router.post('/updateMidmarks', updateMidmarks);
router.post('/getMidmarks', getMidmarks);
router.post('/updatesemmarks1', updatesemmarks1);
router.post('/updatesemmarks2', updatesemmarks2);
router.post('/getstusemmarks1', getstusemmarks1);
router.post('/getstusemmarks2', getstusemmarks2);
router.post('/admviewresults', admviewresults);
router.post('/admviewresults1', admviewresults1);
router.post('/admviewresults2', admviewresults2);

module.exports = router;
