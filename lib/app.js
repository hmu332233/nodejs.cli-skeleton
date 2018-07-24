var exampleModule = require('./exampleModule');

var program = require('commander');

program
  .command('print <name>')
  .description('print hello {name}')
  .option('-l, --locale [locale]', '"ko" or "en"', 'en')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ cli-skeleton print minung.han');
    console.log('    $ cli-skeleton print minung.han -l ko');
    console.log('');
  })
  .action((name, options) => {
    exampleModule.print({ 
      name,
      locale: options.locale
    });
  });

program.parse(process.argv);