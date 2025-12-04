const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const outputFile = path.join(rootDir, 'all.txt');
const excludeDirs = ['.daml', '.lib', 'node_modules', 'canton-open-source-3.4.8'];
const processedFiles = new Set();
let fileCount = 0;
let outputContent = '';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const relativePath = path.relative(rootDir, fullPath);
    
    // Skip if already processed (handling symlinks or duplicates)
    if (processedFiles.has(relativePath)) {
      return;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        processDirectory(fullPath);
      }
    } else if (file.endsWith('.daml')) {
      processedFiles.add(relativePath);
      fileCount++;
      console.log(`[${fileCount}] Processing: ${relativePath}`);
      
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        outputContent += `\n\n// ===== ${relativePath} =====\n\n${content}`;
      } catch (err) {
        console.error(`Error reading file ${relativePath}:`, err);
      }
    }
  });
}

console.log('Starting to process DAML files...');
processDirectory(rootDir);

// Write the combined content to all.daml
fs.writeFileSync(outputFile, outputContent, 'utf8');
console.log(`\n✅ Successfully processed ${fileCount} unique DAML files into ${outputFile}`);