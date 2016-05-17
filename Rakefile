# encoding: UTF-8
require 'handlebars'
require 'json'

task default: [:handlebars, :pdf] do
end

task :handlebars do
  handlebars = Handlebars::Context.new
  ['cp', 'cgv', 'cga'].each do |file|
    File.write(
      "tmp/#{file}.md",
      handlebars.compile(
        File.read("src/#{file}.md")
      ).call(
        JSON.parse(
          File.read('config.json').force_encoding('UTF-8')
        )
      )
    )
  end
end

task :pdf do
  `mkdir -p contracts`
  ['cp', 'cgv', 'cga'].each do |file|
    `rm -f contracts/#{file}.pdf`
    `gimli -f tmp/#{file}.md -o contracts`
  end
  puts 'Vos fichiers sont dans le dossier contracts'
end
