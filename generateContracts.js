const handlebars = require('handlebars')
const mdpdf = require('mdpdf');
const path = require('path');
const fs = require('fs');
const config = require('./config.json');
const args = {
  debug: process.argv.includes('--debug')
};

function generatePdf (fileNameWithoutExt) {
  const fileNameCompiled = fileNameWithoutExt + '__COMPILED.md';
  const fileCompiledPath = path.join(__dirname, `src/${fileNameCompiled}.md`);
  const content = fs.readFileSync(path.join(__dirname, `src/${fileNameWithoutExt}.md`), 'utf8');
  const template = handlebars.compile(content);
  const result = template(config);
  
  fs.writeFileSync(fileCompiledPath, result);
  return mdpdf.convert({
    source: fileCompiledPath,
    destination: path.join(__dirname, `/contracts/${fileNameWithoutExt}.pdf`),
    debug: args.debug && path.join(__dirname, `/contracts/${fileNameWithoutExt}.html`),
    styles: path.join(__dirname, 'md-style.css'),
    pdf: {
      format: 'A4',
      header: {
        height: '0mm'
      },
      footer: {
        height: '0mm'
      },
      border: {
        top: '20mm',
        left: '20mm',
        bottom: '20mm',
        right: '20mm'
      }
    }
  })
    .then(() => fs.unlinkSync(fileCompiledPath));
}

generatePdf('cgv')
  .then(() => generatePdf('cp'))
  .then(() => generatePdf('cga'));
