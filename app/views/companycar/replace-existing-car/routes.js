var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function(req, res) {
  res.render('index')
})

// router.post('/car-make-model', function(req, res) {
//   res.render('usability-testing-changes/car-fuel-type');
// })



/*
  Route One
  When the user selects Electric as a fuel type, the user is taken straight to page car-list-price.
  When the user selects Diesel or Petrol, the user carries onto car-engine-size.
*/


router.post('/car-fuel-type', function(req, res, next) {

  if (req.body.fueltype) {
    var temp = req.body.fueltype;
    if (temp === "Electric") {
      return res.redirect("car-list-price");
    } else {
      return res.redirect("car-engine-size");
    }
  } else {
    next();
  }
})

/*
  Route 2
  When the user enters CO2 emissions as greater than 75mg, they are taken to enter the cost of the car,
  then onto salary sacrifice.
  When the user enters CO2 emissions as less than 75mg, they are taken to enter the cost of the car,
  then onto pay extra out of own money.
*/

router.post('/car-list-price', function(req, res, next) {

  if (req.body = "routingco2emissions") {

    console.log("categorySubmit");
    var temp = req.session.data.routingco2emissions;
    if (temp >= 75) {
      return res.redirect("do-you-pay-towards-car");
    } else if (temp < 75) {
      return res.redirect("did-you-pay-after-tax")
    } else {
      next();
    }
  }
})

module.exports = router
