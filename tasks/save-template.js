const Task = require('../models/task'),
    fsUtils = require("nodejs-fs-utils");

module.exports = new Task('save-template', args => {
    const name = args[0],
        filename = Task.dirs.templates,
        location = (args[1] +"\\").split("\\").join("/"),
        target = (filename+name+'\\').split("\\").join("/");
    fsUtils.copySync(location, target, err=>{
        if(err){
            Task.log(`Unable to save list ${Task.desc.name}, I apologize.`);
            console.error(err);
        }else
            Task.log("Done.")
    });
});