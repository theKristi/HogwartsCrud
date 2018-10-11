require('module-alias/register');
const http = require('http'),
	  HogwartsStudentAPI=require('@HogwartsStudentAPI'),
	  HogwartsStudentServer = http.Server(HogwartsStudentAPI),
	  HogwartsStudentPORT = process.env.PORT || 5000,
	  LOCAL ='0.0.0.0';
	  
HogwartsStudentServer.listen(HogwartsStudentPORT, LOCAL, () => 
console.log(`HogwartsStudentAPI running on ${HogwartsStudentPORT}`));
/*const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.get('api/hogwarts', )
app.listen(port, () => console.log(`Listening on port ${port}`));*/