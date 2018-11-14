const express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose'),
	  morgan = require('morgan'),
	  consign = require('consign'),
      cors = require('cors'),
      config = require('./index'),
	  path=require('path'),
	  database = require('./database')(mongoose, config);
	  const root=__dirname.substr(0,__dirname.indexOf("Services"));
	  app.use(express.static(path.join(root, "Client", "build")));

	  app.use(express.static('.'));
	  app.use(bodyParser.urlencoded({extended: true}));
	  app.use(bodyParser.json());
	  app.use(morgan('dev'));
	  app.use(cors());
	 
	  
	  app.set('hogwartssecret', config.secret);
	  
	  consign({cwd: 'Services'})
	  .include('HogwartsStudentAPI/app/setup')
	  .then('HogwartsStudentAPI/app/api')
	  .then('HogwartsStudentAPI/app/routes')
	  .into(app);
	  
	  module.exports = app;