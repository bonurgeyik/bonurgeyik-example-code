
const { getFiles } = require('./folderParser');
const async = require('async');
const {processFile} = require('./fileProcessor');
const path = require('path');

module.exports = {
    init
}


async function init() {
    let files = await getFiles(path.resolve(__dirname, "../../../assets"));
    let q = async.queue(processFile, 20);
    q.drain = function () {
        console.log('Done.')
    };
    files.forEach(element => {
        q.push(element, function (err) {
            if (err) {
                console.log(err);
            }
        });
    });

}