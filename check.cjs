const fs = require('fs');
for (let i = 1; i <= 6; i++) {
  const html = fs.readFileSync(`public/chapter${i}.html`, 'utf-8');
  const scriptContent = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  try {
    new Function(scriptContent);
    console.log(`Chapter ${i} OK`);
  } catch (e) {
    console.log(`Chapter ${i} Syntax Error: ${e.message}`);
  }
}
