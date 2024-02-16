"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const simple_git_1 = __importDefault(require("simple-git"));
const utils_1 = require("./utils");
const path_1 = __importDefault(require("path"));
const files_1 = require("./files");
const aws_1 = require("./aws");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, aws_1.uploadFile)('D:\\Projects\\vercelClone\\dist\\output\\qb3kh\\package-lock.json', 'output/qb3kh/package-lock.json');
console.log(path_1.default.join(__dirname, `output/randoString`));
app.post('/deploy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoURL = req.body.url;
    console.log(repoURL);
    const id = (0, utils_1.generate_id)();
    yield (0, simple_git_1.default)().clone(repoURL, path_1.default.join(__dirname, `output/${id}`));
    const files = (0, files_1.getAllFiles)(path_1.default.join(__dirname, `output/${id}`));
    console.log(files);
    res.json([]);
}));
app.listen(3000, () => {
    console.log("Server Running at 3000");
});
