var cmd = require('node-cmd');
var express = require('express')
var Promise =  require('bluebird');
//import cmd from 'node-cmd'
 
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })


var app = express();
app.use(express.static('public'));
app.post('/gen', function(req, res){
	console.log("okk");
/*	cmd.get(
        `
		cd ../android
		./gradlew assembleRelease
        `,
        function(err, data, stderr){
            if (!err) {
               console.log('the node-cmd cloned dir contains these files :\n\n',data)
        	res.send("Done");    
	} else {
               console.log('error', err)
            	res.send("err");
		}
        }
);
*/
getAsync(`
	cd ../android
	./gradlew assembleRelease
`).then(data => {
  console.log('cmd data', data)
}).catch(err => {
  console.log('cmd err', err)
});
setTimeout(function(){
	res.send("ok");
},4000);
})

app.listen(3000, function(){
	console.log("Working")
})
