const Task = require('../models/task');

module.exports = new Task('video', args=>{
    const opn = require('opn');
    Task.log(`I'll grab the popcorn. ${args.join("+")}`);
    // opens the url in the default browser
    opn(`https://www.youtube.com/results?search_query=${args.join("+")}`);
});