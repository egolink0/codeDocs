import fs from "fs";
import path from "path";

export function getCurrentDirs(currentDir = "") {
  const rootPath = path.resolve(__dirname, currentDir);
  const paths = fs.readdirSync(rootPath);

  const result = [];
  paths.forEach((p) => {
    const current = {
      name: p,
      link: p,
    };
    const subRoot = path.resolve(rootPath, p);
    if (fs.statSync(subRoot).isDirectory()) {
      current.children = getCurrentDirs(subRoot);
    }
    result.push(current);
  });
  console.log("result", result);
  return result;
}
