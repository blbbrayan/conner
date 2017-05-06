const Task = require('../models/task'),
    fs = require('fs');
module.exports = new Task('forget', args => {
    if (fs.existsSync(Task.memory)) {
        const file = fs.readFileSync(Task.memory, 'utf8').split("\n");
        if (file.length > 0) {
            file.splice(parseInt(args[0]), 1);
            let text = "";
            file.forEach(i => text += '\n' + i);
            if (text.length > 0)
                text = text.substr(1);
            text = text + '\n';
            fs.writeFileSync(Task.memory, text, 'utf8');
            Task.log("Forgotten.")
        } else
            Task.log("Sorry, but I don't seem to have anything remembered.");
    }
});