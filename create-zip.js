const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const rootDir = __dirname;
const outputPath = path.join(rootDir, 'project.zip');

// Convert bytes → human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Delete old zip if exists
if (fs.existsSync(outputPath)) {
  fs.unlinkSync(outputPath);
  console.log('Old project.zip deleted.');
}

const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', { zlib: { level: 9 } });

archive.on('progress', (progress) => {
  process.stdout.write(
    `\rFiles: ${progress.entries.processed} | Size: ${formatBytes(progress.fs.processedBytes)}`
  );
});

archive.on('entry', (entry) => {
  console.log(`\nAdding: ${entry.name}`);
});

archive.on('error', (err) => {
  throw err;
});

output.on('close', () => {
  console.log('\n\nZip created successfully.');
  console.log(`Final Size: ${formatBytes(archive.pointer())}`);
});

archive.pipe(output);

// 🔥 Recursive ignore everywhere
archive.glob('**/*', {
  cwd: rootDir,
  dot: true,
  ignore: [
    '**/node_modules/**',
    '**/.lib/**',
    '**/tempmd/**',
    '**/.daml/**',
    '**/log/**',
    '**/*.log',
    '**/*.gz',
    '**/*.dar',
    'demo.mp4',
    'project.zip',
    '.git/**'
  ]
});

archive.finalize();
