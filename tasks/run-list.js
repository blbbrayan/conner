const Task = require('../models/task'),
    fs = require('fs');

module.exports = new Task('run-list', args => {
    const file = Task.dirs.lists + args[0];

    // On Windows Only ...
    const spawn = require('child_process').spawn,
        bat = spawn('cmd.exe', ['/c', file]);

    bat.stdout.on('data',data=>console.log(data.toString()));
    bat.stderr.on('data',data=>console.log(data.toString()));

    bat.on('exit',code=>Task.log(`Child exited with code ${code}, ${Task.desc.name}.`));
});