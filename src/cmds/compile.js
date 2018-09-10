const path = require ('path');
const Promise = require ('bluebird');
const compiler = require ('../compiler');

const compile = async argv => {
  compiler (argv).then (async compiler => {
      await compiler.compile(argv.directory);
  });
};

module.exports = {
  command: 'compile',
  desc: 'Compile contracts',
  builder: yargs =>
    yargs.option ('eosiocpp', {
      alias: 'c',
      desc: 'eosiocpp path',
      default: process.cwd(),
    }),
  handler: compile,
};
