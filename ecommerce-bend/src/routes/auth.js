const express= require('express');
const {signup} = require('../controllers/auth');
const {signin} = require('../controllers/auth');
const router = express.Router();

router.post('/signup',signup);
router.post('/signin',signin);

router.post('/profile',(req,res)=>{
    res.status(200).json({
        user: 'profile'
    })
})

 module.exports = router;
