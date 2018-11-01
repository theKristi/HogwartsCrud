const config = require('@config'),
	   models = require('@HogwartsStudent/app/setup'),
	   path = require("path");

	   
	   module.exports = (app) => {
		   const api = app.HogwartsStudentAPI.app.api.hogwartsstudent;

		   app.route('/api/v1/getAll')
			  .get(api.getAll(models.HogwartsStudent, app.get('hogwartssecret')));
		   app.route('/api/v1/addStudent')
			  .post(api.addStudent(models.HogwartsStudent))
		   
		   app.get("/", (req, res) => {
			res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
		});
	   }
