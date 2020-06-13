const folderParser = require('../../../src/modules/parser/folderParser');
const path = require('path');


describe('folderParser', () => {
    
    describe('folderParser.getFiles', () => {
        
        it('should return all file names under directory', async() => {
            let files = await folderParser.getFiles(path.resolve(__dirname, "../../fixtures"));
            expect(files.length).toEqual(1);
        });

        it('should return empty array', async() => {
            let files = await folderParser.getFiles(path.resolve(__dirname, "../../fixtures/emptyFolder"));
            expect(files.length).toEqual(0);
        });
        
        
    });

    
    
});