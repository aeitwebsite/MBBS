const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app', 'departments');
const imagesDir = path.join(__dirname, 'temp_images');
const destImagesDir = path.join(__dirname, 'public', 'images', 'profile-pic', 'faculty');

if (!fs.existsSync(destImagesDir)) {
    fs.mkdirSync(destImagesDir, { recursive: true });
}

// Get all available images
const availableImages = fs.readdirSync(imagesDir).filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));

function normalizeString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function findMatchingImage(name) {
    const normName = normalizeString(name);
    // Remove 'dr' prefix for better matching sometimes
    const normNameNoDr = normName.startsWith('dr') ? normName.substring(2) : normName;

    for (const img of availableImages) {
        const normImg = normalizeString(img);
        if (normImg.includes(normName) || normImg.includes(normNameNoDr)) {
            return img;
        }
    }
    return null;
}

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
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const nameMatch = line.match(/name:\s*["']([^"']+)["']/);
        
        if (nameMatch) {
            const rawName = nameMatch[1];
            const matchingImage = findMatchingImage(rawName);
            
            if (matchingImage) {
                // Copy image to dest dir
                const ext = path.extname(matchingImage);
                // Clean name for the new file
                const safeName = rawName.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
                const newImageName = `${safeName}${ext}`;
                const srcImagePath = path.join(imagesDir, matchingImage);
                const destImagePath = path.join(destImagesDir, newImageName);
                
                fs.copyFileSync(srcImagePath, destImagePath);
                
                const newImageRoute = `/images/profile-pic/faculty/${newImageName}`;
                
                // Replace image property in the line
                const newLine = line.replace(/image:\s*["'][^"']*["']/, `image: "${newImageRoute}"`);
                if (newLine !== line) {
                    lines[i] = newLine;
                    modified = true;
                    console.log(`Matched: ${rawName} -> ${matchingImage} in ${path.basename(filePath)}`);
                }
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, lines.join('\n'));
    }
}

processDirectory(srcDir);
console.log('Done!');
