const Task = require('../models/task'),
    fsUtils = require("nodejs-fs-utils");

module.exports = new Task('template', args => {
    const template = (Task.dirs.templates+args[0]+'\\').split("\\").join("/"),
        target = (args[1] +"\\").split("\\").join("/");
    fsUtils.copySync(template, target, err=>{
        if(err){
            Task.log(`Unable to save list ${Task.desc.name}, I apologize.`);
            console.error(err);
        }else
            Task.log("Done.")
    });
});