const fs = require('fs');

const brainDir = __dirname.replace("models", "brain"),
    templatesDir = brainDir + '\\templates\\',
    listsDir = brainDir + '\\lists\\';

module.exports = class {

    constructor(name, onRun) {
        this.name = name;
        this.onRun = onRun;
    }

    run(args) {
        this.onRun(args)
    };

};

module.exports.log=e=>console.log(`conner: "${e}"`);

module.exports.dirs={
    brain: brainDir,
    templates: templatesDir,
    lists: listsDir
};

module.exports.mkDirs = ()=> {
    if(!fs.existsSync(templatesDir))
        fs.mkdirSync(templatesDir);
    if(!fs.existsSync(listsDir))
        fs.mkdirSync(listsDir);
};

module.exports.memory = __dirname.replace('models', 'brain') + '/memory.txt';

module.exports.desc = JSON.parse(fs.readFileSync(__dirname.replace("\\models", "")+'\\desc.json', 'utf8'));