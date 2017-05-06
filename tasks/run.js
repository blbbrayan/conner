const Task = require('../models/task');

module.exports = new Task('run', args => {
    Task.log("Running commands...");

    // On Windows Only ...
    const spawn = require('child_process').spawn,
        bat = spawn('cmd.exe', args);

    bat.stdout.on('data',data=>console.log(data.toString()));
    bat.stderr.on('data',data=>console.log(data.toString()));

    bat.on('exit',code=>Task.log(`Child exited with code ${code}, ${Task.desc.name}.`));
});