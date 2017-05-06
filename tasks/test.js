const Task = require('../models/task');

module.exports=new Task('test', ()=>{
    Task.log("Currently 0 tests.");
});