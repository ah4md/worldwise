import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "src");

function processDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith(".jsx")) {
      let content = fs.readFileSync(fullPath, "utf-8");

      if (!content.includes("import React")) {
        console.log(`Adding import to ${fullPath}`);
        content = `import React from "react";\n` + content;
        fs.writeFileSync(fullPath, content, "utf-8");
      } else {
        console.log(`Already has import: ${fullPath}`);
      }
    }
  });
}

processDirectory(SRC_DIR);
