const
    fs = require('fs'),
    map = JSON.parse(fs.readFileSync(__dirname+'\\map.json', 'utf8')),
    command = process.argv[2],
    args = process.argv.splice(3);
(()=> {
    require('./models/task').mkDirs();
    let t = false;
    Object.keys(map).find(task => {
        if (task === command) {
            require(map[task]).run(args);
            t = true;
            return true;
        }
    });

    if (!t)
        console.log(`conner: Task '${command}' not found master, I apologize.`);
})();