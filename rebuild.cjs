const fs = require('fs');

const masterPath = 'public/master.html';
const masterHtml = fs.readFileSync(masterPath, 'utf-8');

for (let i = 1; i <= 6; i++) {
    const oldHtml = fs.readFileSync(`public/chapter${i}.html`, 'utf-8');
    
    // Extract configs
    const titleMatch = oldHtml.match(/title:\s*"(.*?)",/);
    const subtitleMatch = oldHtml.match(/subtitle:\s*"(.*?)",/);
    const storageKeyMatch = oldHtml.match(/storageKey:\s*"(.*?)",/);
    const tabsMatch = oldHtml.match(/tabs:\s*(\[.*?\])\s*\n/);
    const datasetMatch = oldHtml.match(/const dataset = (\[.*?\]);\s*\n/);
    
    if (titleMatch && subtitleMatch && storageKeyMatch && tabsMatch && datasetMatch) {
        let newHtml = masterHtml
            .replace('{{TITLE}}', titleMatch[1])
            .replace('{{SUBTITLE}}', subtitleMatch[1])
            .replace('{{STORAGE_KEY}}', storageKeyMatch[1])
            .replace('{{TABS_JSON}}', tabsMatch[1])
            .replace('{{DATASET_JSON}}', datasetMatch[1]);
            
        fs.writeFileSync(`public/chapter${i}.html`, newHtml);
        console.log(`Rebuilt chapter${i}.html`);
    } else {
        console.error(`Failed to extract data for chapter${i}.html`);
    }
}
