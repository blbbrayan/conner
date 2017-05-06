const Task = require('../models/task'),
    fs = require('fs');

module.exports = new Task('templates', ()=>{
    Task.log(`Here are your available templates, ${Task.desc.name}.`);
    fs.readdir(Task.dirs.templates, (err, files) => {files.forEach(file=>console.log('- ' + file))});
});