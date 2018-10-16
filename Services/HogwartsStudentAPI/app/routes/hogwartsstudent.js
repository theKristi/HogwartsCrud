const config = require('@config'),
	   models = require('@HogwartsStudent/app/setup');
	   
	   module.exports = (app) => {
		   const api = app.HogwartsStudentAPI.app.api.hogwartsstudent;

		   app.route('/api/v1/getAll')
			  .get(api.getAll(models.HogwartsStudent, app.get('hogwartssecret')));
		   
	   }
