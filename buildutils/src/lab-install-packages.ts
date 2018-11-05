/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

import * as path from "path";
import * as glob from "glob";
import * as utils from "./utils";

// Get all of the packages.
let basePath = path.resolve(".");
let baseConfig = utils.readJSONFile(path.join(basePath, "package.json"));
let packageConfig = baseConfig.workspaces;
let skipSource = process.argv.indexOf("packages") === -1;
let skipExamples = process.argv.indexOf("examples") === -1;

// Handle the packages
for (let i = 0; i < packageConfig.length; i++) {
  if (skipSource && packageConfig[i] === "packages/*") {
    continue;
  }
  if (skipExamples && packageConfig[i] === "examples/*") {
    continue;
  }
  let files = glob.sync(path.join(basePath, packageConfig[i]));
  for (let j = 0; j < files.length; j++) {
    try {
      handlePackage(files[j]);
    } catch (e) {
      console.error(e);
    }
  }
}

utils.run(`jupyter labextension list`);

/**
 * Handle an individual package on the path - update the dependency.
 */
function handlePackage(packagePath: string): void {
  // Read in the package.json.
  let packageJSONPath = path.join(packagePath, "package.json");
  let data: any;
  try {
    data = require(packageJSONPath);
  } catch (e) {
    console.log("skipping", packagePath);
    return;
  }
  if (!data.scripts || !data.scripts["install:lab"]) {
    console.log("no script found", packagePath);
    return;
  }

  utils.run(`cd ${packagePath} && ${data.scripts["install:lab"]}`);
}
