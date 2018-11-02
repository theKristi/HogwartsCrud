const config = require('@config'),
	   models = require('@HogwartsStudent/app/setup'),
	   path = require("path");

	   
	   module.exports = (app) => {
		   const api = app.HogwartsStudentAPI.app.api.hogwartsstudent;

		   app.route('/api/v1/getAll')
			  .get(api.getAll(models.HogwartsStudent, app.get('hogwartssecret')));
		   app.route('/api/v1/addStudent')
			  .post(api.addStudent(models.HogwartsStudent))
		   
		   app.get("*", (req, res) => {
			   const root=__dirname.substr(0,__dirname.indexOf("Services"));
			   console.log(root);
			res.sendFile(path.join(root, "Client", "build", "index.html"));
		});
	   }
