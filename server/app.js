var cmd = require('node-cmd');

cmd.run(`
	cd ../
	cd android
	./gradlew assembleRelease
`)
