var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function(req, res) {
  res.render('index')
})

/*
  Route One
  When the user selects Electric as a fuel type, the user is taken straight to page 9car_cost.
  When the user selects Diesel or Petrol, the user carries onto 7engine_size.
*/
router.post('/6fuel_type', function(req, res, next) {

  if (req.body.fueltype) {
    var temp = req.body.fueltype;
    if (temp === "Electric") {
      return res.redirect("9car_cost");
    } else {
      return res.redirect("7engine_size");
    }
  } else {
    next();
  }
})

/*
  Route Two
  When the user enters CO2 emissions as greater than 75mg, they are taken to enter the cost of the car,
  then onto salary sacrifice.
  When the user enters CO2 emissions as less than 75mg, they are taken to enter the cost of the car,
  then onto pay extra out of own money.
*/
router.post('/9car_cost', function(req, res, next) {

  if (req.body = "co2emissions") {

    console.log("categorySubmit");
    var temp = req.session.data.co2emissions;
    if (temp >= 75) {
      return res.redirect("10sal_sacr");
    } else if (temp < 75) {
      return res.redirect("11pay_employer")
    } else {
      next();
    }
  }
})

router.post('*', function (req,res,next){
console.log("sprint is sprint 1");
next();


})


module.exports = router
