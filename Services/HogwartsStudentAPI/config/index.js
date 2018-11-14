module.exports={
	secret:process.env.DBSECRET||'hogwartssecretdev',
	session:{session:false},
	database:process.env.MONGODB_URI||'mongodb://theKristi:dbPass123@ds155192.mlab.com:55192/heroku_zrxxmr7z'
}