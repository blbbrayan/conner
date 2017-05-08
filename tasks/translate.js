const Task = require('../models/task');

module.exports = new Task('translate', args=>{
    const opn = require('opn');
    Task.log(`Translating ${args.join(" ")}.`);
    // opens the url in the default browser
    opn(`https://translate.google.com/#en/es/${args.join("%")}`);
});