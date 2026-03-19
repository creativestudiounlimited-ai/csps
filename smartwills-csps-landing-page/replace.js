const fs = require('fs');
const file = './src/App.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/#9c2d33/g, '#ab0f0f');
fs.writeFileSync(file, content);
console.log('Replaced all occurrences in App.tsx');
