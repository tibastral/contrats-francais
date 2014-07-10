function getOption(opt) {
  return process.env['npm_config_' + opt]
}

var fs = require('fs')
  , _ = require('underscore')
  , deepmerge = require('deepmerge')
  , moment = require('moment')
  , Handlebars = require('handlebars')

  , srcs = ['cgv', 'cp']

  , config = require('../config.json')
  , filename =  _.template(config.filename, {moment: moment, client: getOption('client')})
  , mdContractPart = []
  , clientConfig = 'clients/' + getOption('client') + '.json'
  , clientAddons = 'clients/' + getOption('client') + '-cp-addons.md'
  , contractSpecificConfig = 'contracts/' + filename + '.json'
  , contractConfig = deepmerge({}, config, {client: getOption('client')})

if (fs.existsSync(clientConfig)) {
  contractConfig = deepmerge(contractConfig, require('../' + clientConfig))
}

if (fs.existsSync(contractSpecificConfig)) {
  contractConfig = deepmerge(contractConfig, require('../' + contractSpecificConfig))
}

clientAddons = (fs.existsSync(clientAddons) ? fs.readFileSync(clientAddons, "utf8") : "")

// specific computing
if (contractConfig.contract.payment_novat === null) {
  contractConfig.contract.payment_novat = contractConfig.company.hourly_rate * contractConfig.contract.duration
}
if (contractConfig.contract.payment_vat === null) {
  contractConfig.contract.payment_vat = Math.round(contractConfig.contract.payment_novat + (contractConfig.contract.payment_novat * contractConfig.vat_rate))
}

// render each file & try to get override and/or addons
srcs.forEach(function(src) {
  var file = 'src/' + src + '.md'
    , fileSpecific = 'contracts/' + filename + '-' + src + '.md'
    , fileSpecificAddons = 'contracts/' + filename + '-' + src + '-addons.md'
    , content = fs.readFileSync(fs.existsSync(fileSpecific) ? fileSpecific : file, "utf8")
  if (!contractConfig[src]) {
    contractConfig[src] = {};
  }
  contractConfig[src].addons = clientAddons + (fs.existsSync(fileSpecificAddons) ? fs.readFileSync(fileSpecificAddons, "utf8") : "")

  mdContractPart.push(
    Handlebars.compile(content)(contractConfig)
  )
})

// since pdf rendering is based on HTML rendering, we add a trick to separate differente pages
var mdContract = mdContractPart.join("\n\n" + '<div style="page-break-after: always"></div>' + "\n\n")
  , mdFilename = 'contracts/' + filename + '.md'
  , pdfFilename = 'contracts/' + filename + '.pdf'

fs.writeFileSync(mdFilename, mdContract)

require('child_process')
  .spawn('markdown-pdf', [mdFilename, '-o', pdfFilename])
    .on('close', function (code) {
      console.log('Contract correclty generated at ' + pdfFilename);
      fs.unlinkSync(mdFilename)
    })
