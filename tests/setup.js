require('../models/User');
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

jest.setTimeout(10000);
