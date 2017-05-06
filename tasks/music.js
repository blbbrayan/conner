const Task = require('../models/task');

module.exports = new Task('music', args=>{
    const opn = require('opn');
    Task.log(`D-D-D DJ Conner ${args.join("+")}.`);
    // opens the url in the default browser
    opn(`https://play.google.com/music/listen#/sr/${args.join("+")}`);
});