const express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose'),
	  morgan = require('morgan'),
	  consign = require('consign'),
      cors = require('cors'),
      config = require('./index'),
    
	  database = require('./database')(mongoose, config);
	  
	  app.use(express.static(path.join(__dirname, "client", "build")))

	  app.use(express.static('.'));
	  app.use(bodyParser.urlencoded({extended: true}));
	  app.use(bodyParser.json());
	  app.use(morgan('dev'));
	  app.use(cors());
	 
	  
	  app.set('hogwartssecret', config.secret);
	  
	  consign({cwd: 'services'})
	  .include('HogwartsStudentAPI/app/setup')
	  .then('HogwartsStudentAPI/app/api')
	  .then('HogwartsStudentAPI/app/routes')
	  .into(app);
	  
	  module.exports = app;