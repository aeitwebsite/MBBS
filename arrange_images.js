const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app', 'departments');
const baseImageDir = path.join(__dirname, 'public', 'images', 'profile-pic');
const oldFacultyDir = path.join(baseImageDir, 'faculty');

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
    // Determine category and dept from path
    // Path looks like: ...\src\app\departments\clinical\obs_gyn\page.js
    const relativePath = path.relative(srcDir, filePath);
    const parts = relativePath.split(path.sep);
    
    let category = '';
    let dept = '';
    
    if (parts.length >= 3) { // e.g. clinical\obs_gyn\page.js
        category = parts[0];
        dept = parts[1];
    } else if (parts.length === 2) { // e.g. clinical\page.js
        category = parts[0];
        dept = 'general';
    } else {
        category = 'general';
        dept = 'general';
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Find if line has image: "/images/profile-pic/faculty/SOMETHING"
        const match = line.match(/image:\s*["'](\/images\/profile-pic\/faculty\/([^"']+)?)["']/);
        
        if (match) {
            const oldImagePath = match[1];
            const filename = match[2];
            
            if (filename) {
                const srcImagePath = path.join(baseImageDir, 'faculty', filename);
                const destDir = path.join(baseImageDir, category, dept);
                const destImagePath = path.join(destDir, filename);
                const newImageRoute = `/images/profile-pic/${category}/${dept}/${filename}`;
                
                // Create directory if it doesn't exist
                if (!fs.existsSync(destDir)) {
                    fs.mkdirSync(destDir, { recursive: true });
                }
                
                // Copy the file
                if (fs.existsSync(srcImagePath)) {
                    fs.copyFileSync(srcImagePath, destImagePath);
                    
                    // Replace the image route in the line
                    line = line.replace(oldImagePath, newImageRoute);
                    lines[i] = line;
                    modified = true;
                    console.log(`Moved ${filename} to ${category}/${dept} and updated ${parts.join('/')}`);
                }
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, lines.join('\n'));
    }
}

console.log('Starting arrangement...');
processDirectory(srcDir);
console.log('Done arranging images!');
