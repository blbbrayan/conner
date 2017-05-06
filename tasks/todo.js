const Task = require('../models/task'),
    fs = require('fs');

module.exports = new Task('todo', () => {
    if(fs.existsSync(Task.memory)) {
        const text = fs.readFileSync(Task.memory, 'utf8').split("\n").filter(item => {return item.length > 1});
        Task.log(text);
    } else
        Task.log(`Nothing on the todo list, ${Task.desc.name}.`)
});