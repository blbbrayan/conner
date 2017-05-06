const Task = require('../models/task');

module.exports=new Task('hey',()=>Task.log(`Hello, ${Task.desc.name}.`));