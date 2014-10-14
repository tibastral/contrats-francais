# encoding: UTF-8
require 'handlebars'
require 'json'

task default: [:handlebars, :pdf] do
end

task :handlebars do
  handlebars = Handlebars::Context.new
  ['cp', 'cgv'].each do |file|
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
  `mkdir contracts`
  ['cp', 'cgv'].each do |file|
    `rm contracts/#{file}.pdf`
    `gimli -f tmp/#{file}.md -o contracts`
  end
end
