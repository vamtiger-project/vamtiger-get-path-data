import { resolve as resolvePath, dirname } from 'path';
import { expect } from 'chai';
import getPathData from '../../';

const mockDataFile = resolvePath(
    __dirname,
    'mock-data',
    'index.js'
);

describe('vamtiger-get-path-data should', function () {
    it('get data for a defined path', async function () {
        const mockDataDirectory = dirname(mockDataFile);
        const filePathData = await getPathData(mockDataFile);
        const directoryPathData = await getPathData(mockDataDirectory);

        expect(filePathData).to.be.ok;
        expect(directoryPathData).to.be.ok;
        
        expect(filePathData.isFile()).to.be.true;
        expect(directoryPathData.isDirectory()).to.be.true;
    })
})