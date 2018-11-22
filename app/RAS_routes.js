var express = require('express')
var http = require('http');
var router = express.Router()
var config = require('./config.js')
// var _ = require('lodash');
var session = require('express-session');



router.use(session({
  secret: 'gfsfdHGDSDSAw',
  resave: false,
  saveUninitialized: true
}));



router.use(function (req, res, next) {
  res.locals.journeyName = req.session.journey ? req.session.journey : "";
  res.locals.cycy1exist = req.session.cycy1exist ? req.session.cycy1exist : "";
  res.locals.upload = req.session.upload ? req.session.upload : "";
  res.locals.nfu = req.session.nfu ? req.session.nfu : "";
  res.locals.link = req.session.link ? req.session.link : "";
  res.locals.test = req.session.test ? req.session.test : "";
  res.locals.j2 = req.session.j2 ? req.session.j2 : "";
  res.locals.url = req.session.url ? req.session.url : "";
  res.locals.urlJourney = req.session.urlJourney ? req.session.urlJourney : "";
  res.locals.sprintName = config.sprintName;
  res.locals.sprintLink = config.sprintLink;
  res.locals.personName = config.personName;
  res.locals.businessType = config.businessType;
  res.locals.session = req.session;
   	next()
})


// Store the current URL
   // var url = req.protocol + "://" + req.get('host') + req.originalUrl;
    
var url = require('url');
var adr = 'http://localhost:3000/sprint410/ras-start?';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);


// Route index page
router.get('/', function (req, res) {
  // destroys session for prior journey workaround solution
    req.session.destroy(function() {
  res.render('index');
  });
})

//////////////  SPRINT 33   /////////////

router.post('/sprint33/choose-option-to-get-residency-status', function(req, res){

  switch (req.body.reasonFor) {
      case 'newmember':
          req.session.selection = 'newmember';
          res.redirect('/sprint33/member-name');
          break;
      case 'residencystatus':
          currentSelection = 'residencystatus';
          req.session.selection = 'residencystatus';
          res.redirect('/sprint33/upload-a-file');
          break;
      case 'no-file-uploaded':
          req.session.selection = 'newmember';
          res.redirect('/sprint33/download-csv-results-2-year');
          break;
      default:
          res.redirect('/sprint33/choose-option-to-get-residency-status');
          break;
    }
});



//////////////  SPRINT 34   /////////////

router.post('/sprint34/choose-option-to-get-residency-status', function(req, res){

  switch (req.body.reasonFor) {
      case 'newmember':
          req.session.selection = 'newmember';
          res.redirect('/sprint34/member-name');
          break;
      case 'residencystatus':
          currentSelection = 'residencystatus';
          req.session.selection = 'residencystatus';
          res.redirect('/sprint34/upload-a-file');
          break;
      case 'no-file-uploaded':
          req.session.selection = 'newmember';
          res.redirect('/sprint34/download-csv-results-2-year');
          break;
      default:
          res.redirect('/sprint34/choose-option-to-get-residency-status');
          break;
    }
});


//////////////  SPRINT 35   /////////////


router.post('/sprint35/choose-option-to-get-residency-status', function(req, res){

  switch (req.body.reasonFor) {
      case 'newmember':
          req.session.selection = 'newmember';
          res.redirect('/sprint35/member-name');
          break;
      case 'residencystatus':
          currentSelection = 'residencystatus';
          req.session.selection = 'residencystatus';
          res.redirect('/sprint35/upload-a-file');
          break;
      case 'no-file-uploaded':
          req.session.selection = 'newmember';
          res.redirect('/sprint35/download-csv-results-2-year');
          break;
      default:
          res.redirect('/sprint35/choose-option-to-get-residency-status');
          break;
    }
});


//////////////  SPRINT 36   /////////////


router.get('/sprint36/cleanAndRestartSingleSearch', function (req, res) {
  // destroys session for prior journey workaround solution
  req.session.destroy(function() {
    res.redirect('/sprint36/member-name-1-year');
  });
});

  router.post('/sprint36/choose-option-to-get-residency-status', function(req, res){

  switch (req.body.reasonFor) {
      case 'newmember':
          req.session.selection = 'newmember';
          res.redirect('/sprint36/member-name');
          break;
      case 'residencystatus':
          currentSelection = 'residencystatus';
          req.session.selection = 'residencystatus';
          res.redirect('/sprint36/upload-a-file');
          break;
      case 'no-file-uploaded':
          req.session.selection = 'newmember';
          res.redirect('/sprint36/download-csv-results-2-year');
          break;
      default:
          res.redirect('/sprint36/choose-option-to-get-residency-status');
          break;
    }
});

//////////////  SPRINT 37   /////////////

router.get('/sprint37/cleanAndRestartSingleSearch', function (req, res) {
  // destroys session for prior journey workaround solution
  req.session.destroy(function() {
    res.redirect('/sprint37/member-name-1-year');
  });
});

  router.post('/sprint37/choose-option-to-get-residency-status', function(req, res){

  switch (req.body.reasonFor) {
      case 'newmember':
          req.session.selection = 'newmember';
          res.redirect('/sprint37/member-name');
          break;
      case 'residencystatus':
          currentSelection = 'residencystatus';
          req.session.selection = 'residencystatus';
          res.redirect('/sprint37/upload-a-file');
          break;
      case 'no-file-uploaded':
          req.session.selection = 'newmember';
          res.redirect('/sprint37/download-csv-results-2-year');
          break;
      default:
          res.redirect('/sprint37/choose-option-to-get-residency-status');
          break;
    }
});

//////////////  SPRINT 38   /////////////

router.get('/sprint38/cleanAndRestartSingleSearch', function (req, res) {
  // destroys session for prior journey workaround solution
  req.session.destroy(function() {
    res.redirect('/sprint38/member-name-1-year');
  });
});

  router.post('/sprint38/choose-option-to-get-residency-status', function(req, res){

  switch (req.body.reasonFor) {
      case 'newmember':
          req.session.selection = 'newmember';
          res.redirect('/sprint38/member-name');
          break;
      case 'residencystatus':
          currentSelection = 'residencystatus';
          req.session.selection = 'residencystatus';
          res.redirect('/sprint38/upload-a-file');
          break;
      case 'no-file-uploaded':
          req.session.selection = 'newmember';
          res.redirect('/sprint38/download-csv-results-2-year');
          break;
      default:
          res.redirect('/sprint38/choose-option-to-get-residency-status');
          break;
    }
});

/// Everything below is old stuff <- Clean up at a later date

router.get('/sprint310/what-do-you-want-to-do/usability' && '/sprint410/what-do-you-want-to-do/usability' && '/sprint25/what-do-you-want-to-do/usability', function (req, res) {
		 // destroys session for prior journey workaround solution
        req.session.destroy(function() {
  		res.render('/sprint310/what-do-you-want-to-do/usability' && '/sprint410/what-do-you-want-to-do/usability' && '/sprint25/what-do-you-want-to-do/usability');
  		
  		});
	
})


// Route index page
//router.get('/bulkd310/dashboard', function (req, res) {
  //Example URL http://localhost:3000/RAS?journey=1
  //If req.query.title exisits set title to req.query.title else to an empty string
//  console.log('hi')
 // var journey = req.query.journey ? req.query.journey : ""
//  if (!journey) {
 //   req.session.journey = journey
 //   console.log(journey)
 // }
 // res.render('bulkd310/dashboard', {journey})
//})


// GENERIC NEXT PAGE ELEMENT
	router.post('*', function (req, res, next) {
    if (req.body['next-page']) {
        res.redirect(req.body['next-page']);
        /* temporarily turned off data capture  */
    } else if (req.body){
        for (var propName in req.body) {
            if (req.body.hasOwnProperty(propName) ) {
            eval("req.session." + propName + " = req.body." + propName);
            console.log(propName);
        }
        }
        next();
    } else {
        next();
    }
    });

	  
     router.post('/sprint410/ras-start', function (req, res) {
  		 var url = req.session.url = 'hi';
  		 var url = req.url;
  		 console.log(url);
  		 res.render('/gov-gateway/index' + url);
      });
     
     router.post('/sprint410/guidance' && '/sprint25/guidance' , function (req, res) {
  		 var url = req.session.url = 'hi';
  		 var url = req.url;
  		 console.log(url);
  		 res.render('/gov-gateway/index' + url);
      });
 
	
	  router.get('/sprint310/what-do-you-want-to-do' && '/sprint410/what-do-you-want-to-do'  && '/sprint25/what-do-you-want-to-do', function(req, res){
			  console.log(res.locals.journeyName);
			  res.render('sprint310/what-do-you-want-to-do' && 'sprint410/what-do-you-want-to-do' && 'sprint25/what-do-you-want-to-do');
	
	  });	
  
		router.get('/sprint310/what-do-you-want-to-dob' && '/sprint410/what-do-you-want-to-dob' && '/sprint25/what-do-you-want-to-dob', function(req, res){
			  console.log(res.locals.journeyName);
			 // destroys session for prior journey workaround solution
			 //req.session.destroy(function() {
			 res.render('sprint310/what-do-you-want-to-dob' && 'sprint410/what-do-you-want-to-dob' && 'sprint25/what-do-you-want-to-dob');
			 // });
		});
  	
	   router.get('/sprint310/what-do-you-want-to-doc'&& '/sprint410/what-do-you-want-to-doc' && '/sprint25/what-do-you-want-to-doc', function(req, res){
			   console.log(res.locals.journeyName);
			// destroys session for prior journey workaround solution
			 req.session.destroy(function() {
				  res.render('sprint310/what-do-you-want-to-doc' && 'sprint410/what-do-you-want-to-doc' && 'sprint25/what-do-you-want-to-doc');
				  console.log(res.locals.journeyName);
			 });
		
	   });    
  	   
  	   
		 router.get('/sprint310/what-do-you-want-to-dod' && '/sprint410/what-do-you-want-to-dod' && '/sprint25/what-do-you-want-to-dod', function(req, res){
		  console.log(res.locals.journeyName);
			// destroys session for prior journey workaround solution
				req.session.destroy(function() {
					  res.render('sprint310/what-do-you-want-to-dod' && 'sprint410/what-do-you-want-to-dod' 
					  	  && 'sprint25/what-do-you-want-to-dod');
					  console.log(res.locals.journeyName);
				});
		 });    
  		 
		 router.post('/testing/exit-survey', function(req, res){
			  console.log(res.locals.journeyName);
				// destroys session for prior journey workaround solution
				req.session.destroy(function() {
					  res.render('/testing/exit-survey');
					  console.log(res.locals.journeyName);
				});
			
		 });    
		 
		 
		 router.post('/sprint25/results', function(req, res){
			 
				req.session.destroy(function() {
					  res.render('/sprint25/results');
					
				});
			
		 });    
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
  		 
		 router.get('/sprint310/what-do-you-want-to-doe' && '/sprint410/what-do-you-want-to-doe' 
		 	 && 'sprint25/what-do-you-want-to-doe', function(req, res){
				var newcycy1exist = req.session.cycy1exist = 'new';
				var existcycy1exist = req.session.cycy1exist = 'existing';
				var cycy1exist = req.session.cycy1exist;
					
				
						  	
				// destroys session for prior journey workaround solution
				 req.session.destroy(function() {
					  res.render('sprint310/what-do-you-want-to-doe' && 'sprint410/what-do-you-want-to-doe' 
					  	  && 'sprint25/what-do-you-want-to-doe'  && 'sprint25/what-do-you-want-to-dod');
					  console.log(res.locals.journeyName);
					  console.log(res.locals.cycy1exist);
				});
			 
		  
		 });    
  
		router.get('/sprint310/bulk-upload' && '/sprint410/bulk-upload' && '/sprint25/bulk-upload', function(req, res){
			  console.log(res.locals.journeyName);	
			  res.render('sprint310/bulk-upload' && 'sprint410/bulk-upload' && 'sprint25/bulk-upload');
			 
		});	
		
		   
    router.get('/sprint27/bulk-upload', function (req, res , next, id ) {	  
    		console.log('we are in the right route' + req.query.test);
    		
  	   }); 
  	
  	
  	
  	
		router.delete('/sprint310/what-do-you-want-to-do/usability' && '/sprint310/what-do-you-want-to-do' && '/sprint310/what-do-you-want-to-doc' && '/sprint310/what-do-you-want-to-dod' && '/sprint310/what-do-you-want-to-doe' && '/sprint410/what-do-you-want-to-do/usability' && '/sprint410/what-do-you-want-to-do' 
			&& '/sprint410/what-do-you-want-to-doc' && '/sprint410/what-do-you-want-to-dod' && '/sprint410/what-do-you-want-to-doe'  && '/sprint25/what-do-you-want-to-do/usability' && '/sprint25/what-do-you-want-to-do' 
			&& '/sprint25/what-do-you-want-to-doc' && '/sprint25/what-do-you-want-to-dod' && '/sprint25/what-do-you-want-to-doe' && '/sprint25/what-do-you-want-to-dod', function(req, res) {
	  
				if (req.session.journey = '77') {
				  
					req.session.destroy(function() {
						
					});
				} else {
					res.send('cant remove public session', 500); // public sessions don't containt sensible information so we leave them
				}
		});

  router.post('/sprint310/what-do-you-want-to-do', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = '1';
        res.redirect('/sprint310/name');
        break;
      case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint310/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
         req.session.url = 'sprint310';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
      default:
        res.redirect('/sprint410/what-do-you-want-to-do');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
  
  
   router.post('/sprint310/what-do-you-want-to-dob', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = '1';
        res.redirect('/sprint310/name');
        break;
      case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint310/name');
        break;
      case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
           case 'residencystatus':
        req.session.journey = '4';
         req.session.url = 'sprint310';
        res.redirect('bulk-upload');
        break;
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
      default:
      	req.session.destroy();
      	req.session.journey = '666';
        res.redirect('what-do-you-want-to-do');
        console.log(req.originalUrl); 
        break;
    }
  });
   
   
   
   
   
    router.post('/sprint310/what-do-you-want-to-doc', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = '1';
        res.redirect('/sprint310/name');
        break;
      case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint310/name');
        break;
      case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
           case 'residencystatus':
        req.session.journey = '4';
         req.session.url = 'sprint310';
        res.redirect('bulk-upload');
        break;
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'processing':
        req.session.journey = 'processing';
        res.redirect('status');
        break;
         case 'fileuploadedc':
        req.session.journey = '77';
        res.redirect('bulk-upload_fileuploadedc');
        break;
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
         case 'errord':
        req.session.journey = '10';
        res.redirect('errors/validation/uploadd');
        break;
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
      default:
      	req.session.journey = '66';
        res.redirect('what-do-you-want-to-doc');
        console.log(req.originalUrl); 
        break;
    }
  });
  
  	

  router.post('/sprint310/what-do-you-want-to-dod', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint310/name');
        break;
      case 'existingmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint310/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
         req.session.url = 'sprint310';
        res.redirect('bulk-upload_success');
        break;
        
         case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      default:
     
      
        res.redirect('what-do-you-want-to-dod');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
  	
  
   router.post('/sprint310/what-do-you-want-to-doe', function (req, res) {
  	  		  
  	  var cycy1exist;
  	 
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = 'cycy1new';
     	req.session.cycy1exist = 'new';
     	console.log(req.body.cycy1exist + 'new')
        res.redirect('/sprint310/name');
        break;
      case 'existingmember':
     	req.session.journey = 'cycy1exist';
     	req.session.cycy1exist = 'existing';
     	console.log(req.body.cycy1exist + 'existing')
        res.redirect('/sprint310/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
         req.session.url = 'sprint310';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '55';
        req.session.cycy1exist;
        console.log(cycy1exist + 'cycy')
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        
         case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      default:
        res.redirect('what-do-you-want-to-doe');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
   
   
   
    router.post('/sprint310/what-do-you-want-to-dof', function (req, res) {
  	  		  
  	  var cycy1exist;
  	 cycy1exist = req.session.cycy1exist = req.body.cycy1exist;
  	 console.log('again' + req.session.cycy1exist)
  	 
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = 'cycy1new';
     	req.session.cycy1exist = 'new';
     	console.log(req.body.cycy1exist + 'new')
        res.redirect('/sprint310/name');
        break;
      case 'existingmember':
     	req.session.journey = 'cycy1existb';
     	req.session.cycy1exist = 'existing';
     	console.log(req.body.cycy1exist + 'existing')
        res.redirect('/sprint310/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploadedb':
        req.session.journey = '555';
        req.session.cycy1exist = 'existing';
        console.log(cycy1exist + 'existing')
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        
         case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      default:
        res.redirect('what-do-you-want-to-dof');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
  	
  	
 router.post('/sprint410/what-do-you-want-to-do', function (req, res) {	  
  var url = req.session.url = 'sprint410';
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = '1';
        res.redirect('/sprint410/name');
        break;
      case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint410/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        req.session.url = 'sprint410';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        req.session.url = 'sprint410';
        console.log(req.session.url);
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        req.session.url = 'sprint410';
         console.log(req.session.url);
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
        case 'errord':
        req.session.journey = '9';
         console.log(req.session.url);
        res.redirect('errors/validation/uploadd');
        break;
        
        case 'residencystatus':
        req.session.url = 'sprint410';
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        default:
        res.redirect('/sprint410/what-do-you-want-to-do');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
  
  
   router.post('/sprint410/what-do-you-want-to-dob', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = '1';
        res.redirect('/sprint410/name');
        break;
      case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint410/name');
        break;
      case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      case 'residencystatus':
         req.session.url = 'sprint410';
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
      default:
      	req.session.destroy();
      	req.session.journey = '666';
        res.redirect('what-do-you-want-to-do');
        console.log(req.originalUrl); 
        break;
    }
  });
   
   
   
   
   
    router.post('/sprint410/what-do-you-want-to-doc', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = '1';
        res.redirect('/sprint410/name');
        break;
      case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint410/name');
        break;
      case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
           case 'residencystatus':
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'processing':
        req.session.journey = 'processing';
        res.redirect('status');
        break;
         case 'fileuploadedc':
        req.session.journey = '77';
        res.redirect('bulk-upload_fileuploadedc');
        break;
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
         case 'errord':
        req.session.journey = '10';
        res.redirect('errors/validation/uploadd');
        break;
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
      default:
      	req.session.journey = '66';
        res.redirect('what-do-you-want-to-doc');
        console.log(req.originalUrl); 
        break;
    }
  });
  
  	

  router.post('/sprint410/what-do-you-want-to-dod', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint410/name');
        break;
      case 'existingmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint410/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '5';
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        
         case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      default:
     
      
        res.redirect('what-do-you-want-to-dod');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
  	
  
   router.post('/sprint410/what-do-you-want-to-doe', function (req, res) {
  	  		  
  	  var cycy1exist;
  	 
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = 'cycy1new';
     	req.session.cycy1exist = 'new';
     	console.log(req.body.cycy1exist + 'new')
        res.redirect('/sprint410/name');
        break;
      case 'existingmember':
     	req.session.journey = 'cycy1exist';
     	req.session.cycy1exist = 'existing';
     	console.log(req.body.cycy1exist + 'existing')
        res.redirect('/sprint410/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '55';
        req.session.cycy1exist;
        console.log(cycy1exist + 'cycy')
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        
         case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      default:
        res.redirect('what-do-you-want-to-doe');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
   
   
   
    router.post('/sprint410/what-do-you-want-to-dof', function (req, res) {
  	  		  
  	  var cycy1exist;
  	 cycy1exist = req.session.cycy1exist = req.body.cycy1exist;
  	 console.log('again' + req.session.cycy1exist)
  	 
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = 'cycy1new';
     	req.session.cycy1exist = 'new';
     	console.log(req.body.cycy1exist + 'new')
        res.redirect('/sprint410/name');
        break;
      case 'existingmember':
     	req.session.journey = 'cycy1existb';
     	req.session.cycy1exist = 'existing';
     	console.log(req.body.cycy1exist + 'existing')
        res.redirect('/sprint410/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploadedb':
        req.session.journey = '555';
        req.session.cycy1exist = 'existing';
        console.log(cycy1exist + 'existing')
        res.redirect('status');
        break;
         case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        
         case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      default:
        res.redirect('what-do-you-want-to-dof');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  }); 
  	
  	
  	
  	
  	
  	
  	router.post('/sprint25/what-do-you-want-to-do', function (req, res) {	  
  	console.log(req.body.reasonFor)
  	 var upload = req.query.upload;
       switch (req.body.reasonFor) {
        case 'newmember':
     	req.session.journey = 'cycy1new';
        res.redirect('/sprint25/name');
    
        break;
        case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint25/name');
        req.session.null = ' ';
        break;
        
        case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.flag = true
        req.session.journey = '4';
        req.session.url = 'sprint25';
        req.session.upload = 'upload';
        console.log(req.session.upload)
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        	if(req.session.flag){
        	   req.session.flag = false
        	   req.session.journey = '5';
        	   req.session.processing = '5';
        	   req.session.cycy1exist = 'new';
        	   res.redirect('status');
        	} else {
        		req.session.journey = '5';
        		req.session.cycy1exist = 'false';
        		req.session.processing = '5';
        		req.session.upload = ' ';
        		res.redirect('status');
        	}
        break;
     
   		case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
        case 'no-file-uploaded':
        req.session.link = 'what-do-you-want-to-do';
        res.redirect('no-file-uploaded');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
      default:
        res.redirect('/sprint25/what-do-you-want-to-do');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
  	
  
   router.post('/sprint25/what-do-you-want-to-doe', function (req, res) {  
   		 var cycy1exist;
  	     console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
        case 'newmember':
     	req.session.journey = '1';
     	req.session.cycy1exist = 'new';
     	console.log(req.body.cycy1exist + 'new')
        res.redirect('/sprint25/name');
        break;
        
        case 'existingmember':
     	req.session.journey = 'cycy1exist';
     	req.session.cycy1exist = 'existing';
     	console.log(req.body.cycy1exist + 'existing')
        res.redirect('/sprint25/name');
        break;
        
        case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        req.session.j2 = 'true'
        console.log(req.session.j2)
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '55';
        req.session.cycy1exist;
        req.session.j2;
        console.log(cycy1exist + 'cycy')
        res.redirect('status');
        break;
        
    	case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('statusb');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'no-file-uploaded':
        res.redirect('no-file-uploaded');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
       case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        
       case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      
    
        default:
        res.redirect('what-do-you-want-to-doe');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  
  });
   
   
   
   router.post('/sprint25/what-do-you-want-to-dod', function (req, res) {	  
  	console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
     case 'newmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint25/name');
        break;
      case 'existingmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint25/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '555';
        req.session.set = 'yes';
        res.redirect('status');
        break;
        
        case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploaded');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
         case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
        
        case 'no-file-uploaded':
        res.redirect('no-file-uploaded');
        break;
        
        case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      default:
     
        res.redirect('what-do-you-want-to-dod');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  }); 
   
   
   router.post('/sprint27/what-do-you-want-to-do', function (req, res) {	  
  	console.log(req.body.reasonFor)
  	 var upload = req.query.upload;
       switch (req.body.reasonFor) {
        case 'newmember':
     	req.session.journey = 'cycy1new';
        res.redirect('/sprint27/name');
        break;
        case 'existingmember':
     	req.session.journey = '2';
        res.redirect('/sprint27/name');
        req.session.null = ' ';
        break;
        case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
    	
       case 'residencystatus':
        req.session.flag = true
        req.session.journey = '4';
        req.session.url = 'sprint27';
        req.session.link = 'what-do-you-want-to-do';
        req.session.upload = 'upload';
        console.log(req.session.upload)
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        	if(req.session.flag){
        	   req.session.flag = false
        	   req.session.journey = '5';
        	   req.session.link = 'what-do-you-want-to-do';
        	     console.log('testq' + req.query);
        	   req.session.processing = '5';
        	   req.session.cycy1exist = 'new';
        	   res.redirect('status');
        	} else {
        		req.session.journey = '5';
        		req.session.link = 'what-do-you-want-to-do';
        		  console.log('testq' + req.query);
        		req.session.cycy1exist = 'false';
        		req.session.processing = '5';
        		req.session.upload = ' ';
        		res.redirect('status');
        	}
        break;
     
   		case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploadedc');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-c';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('bulk-upload_fileuploadedc');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
        case 'no-file-uploaded':
        req.session.link = 'what-do-you-want-to-do';
        req.session.journey = 'no-file-uploaded';
        req.session.use = 'used';
        res.redirect('no-file-uploaded');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
        res.redirect('bulk-upload_success');
        break;
      default:
        res.redirect('/sprint27/what-do-you-want-to-do');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  });
  	
  
   router.post('/sprint27/what-do-you-want-to-doe', function (req, res) {  
   		 var cycy1exist;
  	     console.log(req.body.reasonFor)
    switch (req.body.reasonFor) {
        case 'newmember':
     	req.session.journey = '1';
     	req.session.cycy1exist = 'new';
     	console.log(req.body.cycy1exist + 'new')
        res.redirect('/sprint27/name');
        break;
        
        case 'existingmember':
     	req.session.journey = 'cycy1exist';
     	req.session.cycy1exist = 'existing';
     	console.log(req.body.cycy1exist + 'existing')
        res.redirect('/sprint27/name');
        break;
        
        case 'uploadaspreadsheet':
      	req.session.journey = '3';
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '4';
         req.session.link = 'what-do-you-want-to-doe';
        req.session.j2 = 'true'
        console.log(req.session.j2)
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '55';
         req.session.link = 'what-do-you-want-to-doe';
        req.session.cycy1exist;
        req.session.j2;
        console.log(cycy1exist + 'cycy')
        res.redirect('status');
        break;
        
    	case 'fileuploaded':
        req.session.journey = '7';
        res.redirect('bulk-upload_fileuploadedc');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'no-file-uploaded':
        req.session.link = 'what-do-you-want-to-doe';
        req.session.journey = 'no-file-uploadede';	
        console.log('hi ' + req.query.test);
        res.redirect('no-file-uploaded');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('bulk-upload_fileuploadedc');
        break;
        
       case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
       case 'residencystatus':
        req.session.journey = 'bulk-upload_success';
         req.session.link = 'what-do-you-want-to-doe';
         console.log('h20 ' + req.query.test);
        res.redirect('bulk-upload_success');
        break;
        
       case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
       case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
      
    
        default:
        res.redirect('what-do-you-want-to-doe');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  
  });
   
   
   
   router.post('/sprint27/what-do-you-want-to-dod', function (req, res) {	  
  	console.log(req.body.reasonFor)
  	console.log("All query strings: " + JSON.stringify(req.query));
  	switch (req.body.reasonFor) {
    	
     case 'newmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint27/name');
        break;
      case 'existingmember':
     	req.session.journey = 'nonmatch';
        res.redirect('/sprint27/name');
        break;
        
       case 'uploadaspreadsheet':
      	req.session.journey = '3';
      	console.log('a' + req.query.test);
        res.redirect('bulk-upload');
        break;
      
    	case 'residencystatus':
        req.session.journey = '444';
         req.session.link = 'what-do-you-want-to-dod';
         console.log('b' + req.query);
        res.redirect('bulk-upload');
        break;
        
        case 'residencystatusuploaded':
        req.session.journey = '555';
        req.session.set = 'yes';
        res.redirect('status');
        break;
        
        case 'fileuploaded':
        req.session.journey = '7';
        req.session.link = 'what-do-you-want-to-dod';
        res.redirect('bulk-upload_fileuploadedc');
        break;
        
        case 'fileuploadedb':
        req.session.journey = 'bulk-upload_fileuploadedb';
        res.redirect('bulk-upload_fileuploadedb');
        break;
        
        case 'errora':
        req.session.journey = '8';
        res.redirect('errors/validation/uploada');
        break;
         
        case 'residencystatusuploadedb':
        req.session.journey = '9';
        res.redirect('statusb');
        break;
        
         case 'errord':
        req.session.journey = '9';
        res.redirect('errors/validation/uploadd');
        break;
        
         case 'residencystatus':
        req.session.link = 'what-do-you-want-to-dod';
        req.session.journey = 'bulk-upload_success';
        req.query = test;
        res.redirect('bulk-upload_success');
        break;
        
    	case 'no-file-uploaded':
        req.session.test;
        req.session.nfu = 'no-file-uploaded';
        res.redirect('no-file-uploaded');
        req.session.link = 'what-do-you-want-to-dod';
        req.session.journey = 'no-file-uploadedd';	
        break;
        
        case 'no-results':
        req.session.journey = 'no-results';
        res.redirect('no-results');
        break; 
        
        case 'name-check':
        req.session.journey = 'name-check';
        res.redirect('name-check');
        break; 
        
         case 'date-of-birth-check':
        req.session.journey = 'date-of-birth-check';
        res.redirect('date-of-birth-check');
        break; 
        
      default:
        res.redirect('what-do-you-want-to-dod');
        console.log(req.originalUrl); 
        console.log(req.session); 
        break;
    }
  }); 
   
   
  
   

  
  	

  router.post('/sprint14/2sv/mobile-or-landline' && '/sprint150/2sv/mobile-or-landline' && '/sprint25/2sv/mobile-or-landline'  && '/sprint27/2sv/mobile-or-landline' && '/sprint210/2sv/mobile-or-landline' && '/2sv/mobile-or-landline', function (req, res) {
  		     req.session.url;
    switch (req.body.reasonFor) {
     case 'mobile':
        res.redirect('enter-mobile');
        break;
      case 'landline':
        res.redirect('enter-landline');
        break;
      case 'app':
        res.redirect('set-up-app');
        break;
      default:
        res.redirect('mobile-or-landline');
        break;
    }
  });
  
  router.post('/sprint14/2sv/shared-access' && '/sprint150/2sv/shared-access'  && '/sprint27/2sv/shared-access' && '/sprint25/2sv/shared-access' && '/sprint210/2sv/shared-access' && '/2sv/shared-access', function (req, res) {
  		     req.session.url;
    if (req.body.reasonFor === 'yes') {
      res.redirect('create-new-user');
    }
    else {
      res.redirect('/sprint410/what-do-you-want-to-do' && '/sprint25/what-do-you-want-to-do' && '/sprint27/what-do-you-want-to-do');
    }
  });

    router.post('/sprint14/2sv/create-new-user' && '/sprint150/2sv/create-new-user' && '/sprint210/2sv/create-new-user' && '/sprint25/2sv/create-new-user' && '/sprint27/2sv/create-new-user' && '/2sv/shared-access', function (req, res) {
    	req.session.url;
    if (req.body.reasonFor === 'yes') {
      res.redirect('manage-users');
    }
    else {
      res.redirect('/bulkd210/dashboard');
    }
  });

  router.post('/sprint15/2sv/mobile-or-landline' && '/sprint150/2sv/mobile-or-landline' && '/sprint25/2sv/mobile-or-landline' && '/sprint210/2sv/mobile-or-landline'  && '/2sv/mobile-or-landline', function (req, res) {
  		     req.session.url;
    switch (req.body.reasonFor) {
     case 'mobile':
        res.redirect('enter-mobile');
        break;
      case 'landline':
        res.redirect('enter-landline');
        break;
      case 'app':
        res.redirect('set-up-app');
        break;
      default:
        res.redirect('mobile-or-landline');
        console.log(req.originalUrl);
        break;
    }
  });


	  router.post('/sprint15/2sv/shared-access' && '/sprint150/2sv/shared-access' && '/sprint210/2sv/shared-access' && '/sprint25/2sv/shared-access'  && '/sprint27/2sv/shared-access' && '/sprint27/2sv/mobile-or-landline', function (req, res) {
	  		 
		if (req.body.reasonFor === 'yes') {
		  res.redirect('create-new-user');
	
		}
		else {
	
		  res.redirect('/sprint410/what-do-you-want-to-do' && '/sprint25/2sv/shared-access');
		}
	  });
	
		router.post('/sprint15/2sv/create-new-user' && '/sprint150/2sv/create-new-user' && '/sprint210/2sv/create-new-user' && '/sprint410/2sv/create-new-user' && '/sprint25/2sv/create-new-user' && '/sprint27/2sv/create-new-user', function (req, res) {
		   var url = req.url;
				console.log(url);
				req.session.url;
		if (req.body.reasonFor === 'yes') {
		  res.redirect('manage-users');
		}
		else {
		  res.redirect('/sprint25/what-do-you-want-to-do'  && '/sprint25/2sv/shared-access');     
		}
	  });
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  	

	  router.get('/sprint15/150', function(req, res) {
	  		 res.render('index', { 'mode' : 'id1' });
	  });
	  
	   router.get('/sprint15/150', function(req, res) {
	  		 res.render('index', { 'mode' : 'id1' });
	  });
	
	
	  router.get('/bulk/', function (req, res) {
	  res.render('bulk/');
	  });
	
	  router.get('/play/', function (req, res) {
	  res.render('play/');
	  });
	
	  router.get('/errors/', function (req, res) {
	  res.render('errors/');
	  });
	
	
	  router.get('assets/documents/', function (req, res) {
	  res.render('documents/');
	  });



  // routing for param

		  router.param(function(param, option) {
		  return function (req, res, next, val) {
			if (val == option) {
			  next();
			}
			else {
			  res.sendStatus(403);
			}
		  }
		  
	});







module.exports = router