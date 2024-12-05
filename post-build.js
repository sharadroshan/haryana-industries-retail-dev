const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Recursive function to get all .html files
function getHtmlFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        const fullPath = path.join(dirPath, "/", file);

        // Skip if it's the file you want to exclude
        if (fullPath === '.next/server/pages/all-companies.html') {
            console.log("Excluding file:", fullPath);
            return;
        }
        // Skip if it's the file you want to exclude
        if (fullPath === '.next/server/pages/sell-unlisted-shares.html') {
            console.log("Excluding file:", fullPath);
            return;
        }
        // Skip if it's the file you want to exclude
        if (fullPath === '.next/server/pages/buy-unlisted-shares.html') {
            console.log("Excluding file:", fullPath);
            return;
        }

        // Skip if it's the file you want to exclude
        if (fullPath === '.next/server/pages/index.html') {
            console.log("Excluding file:", fullPath);
            return;
        }

        if (fs.statSync(fullPath).isDirectory()) {
            console.log("Entering directory:", fullPath);
            arrayOfFiles = getHtmlFiles(fullPath, arrayOfFiles);
        } else {
            if (path.extname(file) === '.html') {
                console.log("Including file:", fullPath);
                arrayOfFiles.push(fullPath);
            } else {
                console.log("Skipping file:", fullPath);
            }
        }
    });

    return arrayOfFiles;
}


// Specify the directory
//const directoryPath = './.next/server/pages/company';
const directoryPath = './.next/server/pages';

// Get all HTML files recursively
const htmlFiles = getHtmlFiles(directoryPath);

// File paths to remove
const filePaths = [
    "https://d1nlin54mueans.cloudfront.net/_next/static"
    // "static/chunks/38",
    // "static/chunks/46",
    // "static/chunks/40",
    // "static/chunks/45",
    // "static/chunks/41",
    // "static/chunks/43",
    // "2d3ac9a9b06ec3cdb931c49a1eaddf16faf14a35",
    // "static/chunks/39",
    // "f331c0b54d91e6647e9c8e29c9f7dae52d61a40d",
    // "static/chunks/37",
    // "static/chunks/50",
    // "ed2290246f9608cd4b74b7516000aed670d5310f",
    // "e5a3393d17e5aeba3251a970e8fdd8ac47371ebe",
    // "static/chunks/polyfills"
];

// Loop over each HTML file
for (const filePath of htmlFiles) {
    // Read the file
    const html = fs.readFileSync(filePath, 'utf8');

    // Load the HTML into Cheerio
    const $ = cheerio.load(html);


    // Remove the link tags
    $('link[rel="preload"][href^="https://d1nlin54mueans.cloudfront.net/_next/static"][href$=".js"]').remove();

    // Loop over each path to remove
    for (const pathToRemove of filePaths) {
        $(`script[src*="${pathToRemove}"]`).remove();
    }


    $(`script[id*="__NEXT_DATA__"]`).remove();

    // Write the modified HTML back to the file
    fs.writeFileSync(filePath, $.html());
}
