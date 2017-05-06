const Task = require('../models/task'),
    fs = require('fs');

module.exports = new Task('remember', args => {
    let text = "";
    args.forEach(i=>text+=' '+i);
    if(text.length > 0)
        text = text.substr(1);
    if(fs.existsSync(Task.memory)) {
        const file = fs.readFileSync(Task.memory, 'utf8');
        if (file.length > 1)
            text = '\n' + text;
    }
    fs.writeFileSync(Task.memory, text, 'utf8');
    Task.log("Got it.");
});