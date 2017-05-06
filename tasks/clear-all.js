const Task = require('../models/task'),
    fsUtils = require("nodejs-fs-utils");

module.exports=new Task('clear-all',()=>{
    fsUtils.emptyDirSync(Task.dirs.brain);
    Task.log(`Cleaning up. Like always, ${Task.desc.name}.`);
});