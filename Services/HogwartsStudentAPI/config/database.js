module.exports = (mongoose, config) => {
	const database = mongoose.connection;
	mongoose.Promise = Promise;
	
	mongoose.connect(config.database, {
		promiseLibrary: global.Promise,
		useNewUrlParser: true
	  });
	database.on('error', error => console.log(`Connection to Hogwarts database failed: ${error}`));
	
	database.on('connected', () => console.log('Connected to Hogwarts database'));
    
	database.on('disconnected', () => console.log('Disconnected from Hogwarts database'));
	
	process.on('SIGNINT',() => {
		database.close(() => {
			console.log('Hogwarts teminated, connection closed');
			process.exit(0);
		})
    });
}