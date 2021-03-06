var express = require('express')
var router = express.Router()
var config = require('./config.js')


router.use(function (req, res, next) {
  res.locals.sprintName = config.sprintName
  res.locals.sprintLink = config.sprintLink
  next()
})


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


// GENERIC NEXT PAGE ELEMENT
router.post('*', function (req, res, next) {
    if (req.body['next-page']) {
        res.redirect(req.body['next-page']);
    } else if (req.body){
        for (var propName in req.body) {
            if (req.body.hasOwnProperty(propName) ) {
            eval("req.session." + propName + " = req.body." + propName);
            console.log(propName);
        }}
        next();
    } else {
        next();
    }
});


// add your routes here


// router.use('/company_car', require('./views/company_car/routes'));
// router.use('/replace-existing-car', require('./views/replace-existing-car/routes'));
// router.use('/usability-testing-changes', require('./views/usability-testing-changes/routes'));
// router.use('/amend-car', require('./views/amend-car/routes'));




module.exports = router