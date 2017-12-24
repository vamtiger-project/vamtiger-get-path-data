"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const chai_1 = require("chai");
const _1 = require("../../");
const mockDataFile = path_1.resolve(__dirname, 'mock-data', 'index.js');
describe('vamtiger-get-path-data should', function () {
    it('get data for a defined path', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const mockDataDirectory = path_1.dirname(mockDataFile);
            const filePathData = yield _1.default(mockDataFile);
            const directoryPathData = yield _1.default(mockDataDirectory);
            chai_1.expect(filePathData).to.be.ok;
            chai_1.expect(directoryPathData).to.be.ok;
            chai_1.expect(filePathData.isFile()).to.be.true;
            chai_1.expect(directoryPathData.isDirectory()).to.be.true;
        });
    });
});
//# sourceMappingURL=index.spec.js.map