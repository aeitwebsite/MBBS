const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app', 'departments');
let missingImages = [];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            processFile(fullPath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    const relativePath = path.relative(srcDir, filePath);
    const parts = relativePath.split(path.sep);
    let deptName = parts.length >= 2 ? `${parts[0]}/${parts[1]}` : parts[0];
    if (deptName === 'page.js') deptName = 'General';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Find names where image is strictly empty "" or ''
        const emptyImageMatch = line.match(/name:\s*["']([^"']+)["'][^}]*image:\s*["']["']/);
        
        if (emptyImageMatch) {
            const rawName = emptyImageMatch[1];
            // Exclude empty names (like HOD empty template)
            if (rawName.trim() !== "") {
                missingImages.push(`- **${rawName}** (${deptName})`);
            }
        }
    }
}

processDirectory(srcDir);

// Deduplicate just in case
missingImages = [...new Set(missingImages)];

console.log(missingImages.join('\n'));
