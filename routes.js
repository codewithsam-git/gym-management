const express = require('express');
const router = express.Router();
const AuthControllers = require('../controllers/authController.js');
const DashbboardController = require('../controllers/dashboardController.js');
const MemberController = require('../controllers/memberController.js');
const PackageController = require('../controllers/packageController.js');
const InquiryController = require('../controllers/inquiryController.js');
const StaffController = require('../controllers/staffController.js');
const CollectionController = require('../controllers/collectionController.js');


router.get('/', AuthControllers.loginpage);
router.get('/dashboard', DashbboardController.indexPage);


// router.get('/add-members', MemberController.addMemberPage);
// router.get('/member-list', MemberController.memberList);
router.post('/save-member', MemberController.saveMember);
router.get('/get-member', MemberController.getMember);
router.delete('/delete-member/:id', MemberController.deleteMember);
router.put('/update-member/:id', MemberController.updateMember);

// router.get('/add-packages', PackageController.addPackagePage);
// router.get('/all-packages', PackageController.packageList);
router.post('/save-package', PackageController.savePackage);
router.get('/get-package', PackageController.getPackage);
router.delete('/delete-package/:id', PackageController.deletePackage);
router.put('/update-package/:id', PackageController.updatePackage);

router.post('/save-inquiry', InquiryController.saveInquiry);
router.get('/get-inquiry', InquiryController.getInquiry);
router.delete('/delete-inquiry/:id', InquiryController.deleteInquiry);
router.put('/update-inquiry/:id', InquiryController.updateInquiry);

router.post('/save-staff', StaffController.saveStaff);
router.get('/get-staff', StaffController.getStaff);
router.delete('/delete-staff/:id', StaffController.deleteStaff);
router.put('/update-staff/:id', StaffController.updateStaff);

router.get('/collections', CollectionController.viewCollectionPage);


module.exports = router;
