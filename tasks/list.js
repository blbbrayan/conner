const Task = require('../models/task'),
    fs = require('fs');

module.exports = new Task('list', ()=>{
    Task.log(`Here are your available lists, ${Task.desc.name}.`);
    fs.mkdirSync(Task.dirs.lists);
    fs.readdir(Task.dirs.lists, (err, files) => {files.forEach(file=>console.log('- ' + file))});
});