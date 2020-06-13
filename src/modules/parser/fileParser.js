/* istanbul ignore file */

//each rdf has only one ebook as child, no need to use array while parsing xml
const { parseString } = require('xml2js').Parser({explicitArray: false}); 
module.exports = {
    parseXmlFile
}
//xml2js parser is not promisified by default
function parserPromise(file) { 
    return new Promise(function(resolve, reject)
    {
        parseString(file, function(err, result){
            if(err){
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });

}

async function parseXmlFile(file) {
    return await parserPromise(file);
}