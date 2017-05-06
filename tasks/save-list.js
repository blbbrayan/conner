const Task = require('../models/task'),
    fsUtils = require("nodejs-fs-utils");

module.exports = new Task('save-list', args=>{
    const name = args[0],
        file = args[1].split("\\").join("/"),
        extension = file.substr(file.lastIndexOf(".")),
        target = (Task.dirs.lists+name+extension).split("\\").join("/");
    fsUtils.copySync(file, target, err=>{
        if(err){
            Task.log(`Unable to save list ${Task.desc.name}, I apologize.`);
            console.error(err);
        }else
            Task.log("Done.")
    });
});