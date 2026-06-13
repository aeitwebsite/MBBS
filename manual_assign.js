const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app', 'departments');
const baseImageDir = path.join(__dirname, 'public', 'images', 'profile-pic');
const tempDir = path.join(__dirname, 'temp_images');

const manualMatches = {
    "Dr. H Anchitha": "Dr_Anchitha_Dr_Anchitha_24.png",
    "Dr.Chaithanya R Shetty": "Dr_Chaitanya_R_Shetty_Dr_Chaitanya_R_Shetty_119.png",
    "Dr. Gouri B Kaverappa": "Dr_Gouri_B_Kaveriappa_Dr_Gouri_B_Kaveriappa_117.png",
    "Dr. Kommi Shetty Sudhakar": "Dr_K_Sudhakar_Dr_K_Sudhakar_120.png",
    "Dr. Meera Sashidaran": "Dr_Meera_Sasidharan_Dr_Meera_Sasidharan_99.png",
    "Dr. Pranamya Jain": "Dr_Pranamya_Dr_Pranamya_88.png",
    "Dr. Rakesh Shivram Shetty": "Dr_Rakesh_Shetty_Dr_Rakesh_Shetty_179.png",
    "Dr. Rekha Nayaka": "Dr_Rekha_Nayak_Dr_Rekha_Nayak_20.png",
    "Dr. Sachin Sarvotham Shetty": "Dr_Sachin_S_Shetty_Dr_Sachin_S_Shetty_23.png",
    "Dr Sangeethanath Sharma": "Dr_Sangeeta_Nath_Sharma_Dr_Sangeeta_Nath_Sharma_13.png",
    "Dr. B Sumanth Reddy": "Dr_Sumanth_Reddy_Dr_Sumanth_Reddy_124.png"
};

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
    const relativePath = path.relative(srcDir, filePath);
    const parts = relativePath.split(path.sep);
    let category = parts.length >= 2 ? parts[0] : 'general';
    let dept = parts.length >= 2 ? parts[1] : 'general';

    let content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        const nameMatch = line.match(/name:\s*["']([^"']+)["']/);
        if (nameMatch) {
            const rawName = nameMatch[1];
            
            if (manualMatches[rawName]) {
                const imgFilename = manualMatches[rawName];
                const destDir = path.join(baseImageDir, category, dept);
                const destImagePath = path.join(destDir, imgFilename);
                const newImageRoute = `/images/profile-pic/${category}/${dept}/${imgFilename}`;
                
                // Copy the file from temp to final
                const srcImagePath = path.join(tempDir, imgFilename);
                if (fs.existsSync(srcImagePath)) {
                    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
                    fs.copyFileSync(srcImagePath, destImagePath);
                    
                    // Update JS
                    line = line.replace(/image:\s*["'][^"']*["']/, `image: "${newImageRoute}"`);
                    lines[i] = line;
                    modified = true;
                    console.log(`Matched and Moved: ${rawName} -> ${newImageRoute}`);
                }
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, lines.join('\n'));
    }
}

console.log('Starting manual assignment...');
processDirectory(srcDir);
console.log('Done!');
