const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const puppeteer = require('puppeteer');

const readmePath = path.join(__dirname, '..', 'README.md');
const outputPath = path.join(__dirname, '..', 'README.pdf');

const markdown = fs.readFileSync(readmePath, 'utf8');
const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>README</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; margin: 40px; color: #111; line-height: 1.6; }
    h1, h2, h3, h4, h5, h6 { color: #1a1a1a; }
    p { margin: 0.8em 0; }
    pre { background: #f4f4f4; padding: 16px; overflow: auto; border-radius: 8px; font-family: Consolas, 'Courier New', monospace; }
    code { background: #f4f4f4; padding: 2px 5px; border-radius: 4px; }
    blockquote { border-left: 4px solid #ccc; margin: 1em 0; padding: 0.6em 1em; color: #555; background: #f9f9f9; }
    table { border-collapse: collapse; width: 100%; margin-top: 1em; }
    th, td { border: 1px solid #ddd; padding: 10px; }
    th { background: #f2f2f2; }
    a { color: #0366d6; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
${md.render(markdown)}
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' }
  });
  await browser.close();
  console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
})().catch((error) => {
  console.error('PDF generation failed:', error);
  process.exit(1);
});
