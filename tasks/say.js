const Task = require('../models/task');

module.exports = new Task('say', args=>Task.log(args));