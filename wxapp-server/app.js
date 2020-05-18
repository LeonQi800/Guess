const express = require('./node_modules/express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('./node_modules/body-parser'); 
const session = require('./node_modules/express-session');
const cors = require('./node_modules/cors/lib');
const passport = require('./node_modules/passport');
const errorhandler = require('./node_modules/errorhandler');
const messages = require('./config/messages');
const path = require('path');
const http = require('http');
const methods = require('./node_modules/methods');

require('./models/User');
require('./config/passport');


const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./node_modules/method-override')());
app.use(express.static(path.join(__dirname , 'lioenix-ws/public')));
// app.use(express.static(__dirname + '/public'));
app.use(errorhandler());
app.use(require('./node_modules/morgan')('dev'));

app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

// DB

mongoose.set('useCreateIndex', true);
const db = require('./config/keys').MongoURI;
// DB connect
mongoose.connect(db, {dbName:'wxapp', useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log(messages.DB_CONNECT))
    .catch(err => console.log(err) );

if (!isProduction) {
    app.use(errorhandler());
}

// Routes
app.use('/', require('./api'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Service started on port ${PORT}`));

