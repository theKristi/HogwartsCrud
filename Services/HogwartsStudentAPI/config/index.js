module.exports={
	secret:process.env.DBSECRET||'hogwartssecretdev',
	session:{session:false},
	database:process.env.MONGODB_URI||'mongodb+srv://thekristi:GiveMeAdb123!@cluster0-uas4b.mongodb.net/WizardingWorld'
}