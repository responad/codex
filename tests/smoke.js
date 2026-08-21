const fs = require('fs');
const html = fs.readFileSync('index.html','utf8');
const css = fs.readFileSync('styles.css','utf8');
const js = fs.readFileSync('app.js','utf8');
const required = ['시공입찰 DB','자재 영업기회','detailDrawer','filterDrawer','projectTable'];
for (const key of required) if (!html.includes(key)) throw new Error(`index.html missing: ${key}`);
for (const key of ['실제 자재·장비 및 물량','납품·시공 패키지','AI 자재 영업기회','공사원가계산','나라장터 공고 원문']) if (!js.includes(key)) throw new Error(`app.js missing: ${key}`);
if (!css.includes('width:500px')) throw new Error('3Depth drawer must stay 500px');
console.log('Smoke checks passed');
