var cmd = require('node-cmd');
var express = require('express')

var app = express();
app.use(express.static('public'));
app.post('/gen', function(req, res){
	console.log("okk");
	cmd.run(`
		cd ../
		cd android
		./gradlew assembleRelease
	`);
	res.send("Done");
})

app.listen(3000, function(){
	console.log("Working")
})