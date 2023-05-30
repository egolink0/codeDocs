const fs = require("fs");
const path = require("path");

function getCurrentDirs(currentDir = "") {
  const rootPath = path.resolve(__dirname, currentDir);
  const paths = fs.readdirSync(rootPath);

  const result = [];
  paths.forEach((p) => {
    if (p === "index.mdx") return;
    const current = { link: p.replace(".mdx", "") };
    const subRoot = path.resolve(rootPath, p);
    if (fs.statSync(subRoot).isDirectory()) {
      current.children = getCurrentDirs(subRoot);
    } else {
      if (!/\.mdx?$/.test(p)) {
        return;
      }
    }

    result.push(current);
  });
  return result;
}

function writeRoutesJsonFile(obj) {
  const jsonStr = JSON.stringify(obj);
  fs.writeFileSync(path.resolve(__dirname, "routes.json"), jsonStr);
}

const routeObj = getCurrentDirs();
writeRoutesJsonFile(routeObj);
