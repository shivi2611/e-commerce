const express= require('express');
const router= express.Router();

router.get('/signup', (req, res) => {
    res.send('Signup page');
});
router.get('/signin', (req, res) => {
    res.send('Signin page');
});
router.get('/signout', (req, res) => {
    res.send('signup page');
});
router.post('/signup', (req, res) => {
    res.send(`you are ${req.body.username}, you have not signed up`);
});
router.post('/signin', (req, res) => {
    res.send(`you are ${req.body.username}, you have not signed in`);
});

module.exports= router;