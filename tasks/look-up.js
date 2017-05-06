const Task = require('../models/task');

module.exports = new Task('look-up', args=>{
    const opn = require('opn');
    Task.log(`Looking up ${args.join("+")}.`);
    // opens the url in the default browser
    opn(`https://www.google.com/#q=${args.join("+")}`);
});