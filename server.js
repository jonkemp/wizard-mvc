var express = require('express'),
    app = express();

app.use( express.static( __dirname + '/public' ) );
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);

    require('opn')('http://localhost:3000');
});
