"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getAllFiles = (localFolderPath) => {
    let result = [];
    const allFilesAndFolder = fs_1.default.readdirSync(localFolderPath);
    allFilesAndFolder.forEach(file => {
        const fullFilePath = path_1.default.join(localFolderPath, file);
        if (fs_1.default.statSync(fullFilePath).isDirectory()) {
            result = result.concat((0, exports.getAllFiles)(fullFilePath));
        }
        else {
            result.push(fullFilePath);
        }
    });
    return result;
};
exports.getAllFiles = getAllFiles;
