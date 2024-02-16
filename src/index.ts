import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate_id } from "./utils";
import path from 'path'
import { getAllFiles } from "./files";
import { uploadFile } from "./aws";

const app = express()

app.use(cors());
app.use(express.json())


uploadFile('D:\\Projects\\vercelClone\\dist\\output\\qb3kh\\package-lock.json', 'output/qb3kh/package-lock.json')

console.log(path.join(__dirname, `output/randoString`));
app.post('/deploy', async(req, res) => {

    const repoURL = req.body.url;
    console.log(repoURL);
    const id = generate_id();

    await simpleGit().clone(repoURL, path.join(__dirname,`output/${id}`));

    const files = getAllFiles(path.join(__dirname,`output/${id}`));

    console.log(files);

    res.json([]);

})
app.listen(3000, ()=> {
    console.log("Server Running at 3000");
})