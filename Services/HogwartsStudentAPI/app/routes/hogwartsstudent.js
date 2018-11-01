const config = require('@config'),
	   models = require('@HogwartsStudent/app/setup');
	   
	   module.exports = (app) => {
		   const api = app.HogwartsStudentAPI.app.api.hogwartsstudent;

		   app.route('/api/v1/getAll')
			  .get(api.getAll(models.HogwartsStudent, app.get('hogwartssecret')));
		   app.route('/api/v1/addStudent')
			  .post(api.addStudent(models.HogwartsStudent))
		   app.get('/api/hello', (req, res) => {
			res.send({ express: 'Hello! Hogwarts is waiting.' });
		   });
		   app.route('api/v1/deletStudent')
		   	  .post(api.deleteStudent(models.HogwartsStudent))  
		   
	   }
