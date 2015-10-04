#! /usr/bin/env node


var shell = require('shelljs');

if (process.argv.length == 3) {
    
    shell.exec("git checkout -b fire");
    shell.exec("git add .");
    shell.exec("git commit -m " + process.argv[2]);
    shell.exec("git push origin fire");
    
    }

else{

shell.exec("git checkout -b fire");
shell.exec("git add .");
shell.exec("git commit -m 'firefire'");
shell.exec("git push origin fire");

}