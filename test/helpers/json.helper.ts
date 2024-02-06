import fs from 'fs';
import path from "path";

export function readerJson(pathFile: string) {
    const basePath = path.join(process.cwd(), './test/fixture/static/')
    const read = fs.readFileSync(`${basePath}${pathFile}.json`, 'utf8');
    const json = JSON.parse(read);
    return json;
}