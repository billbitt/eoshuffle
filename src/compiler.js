const path = require ('path');
const fs = require ('fs-extra');
const Promise = require ('bluebird');
const shelljs = require ('shelljs');
const lib = require ('./lib');

module.exports = async function (opts = {}) {
  
  const { logger, dirs } = await lib(opts);

  const _compileContract = (cmd, dir) => {
    return new Promise ((resolve, reject) => {
      const pathName = path.basename (dir);
      logger.debug = `Running: ${cmd}`;
      shelljs.exec (cmd, {silent: true}, (code, stdout, stderr) => {
        if (code !== 0) {
          return reject (stderr);
        }
        resolve (stdout);
      });
    });
  };

  const compileAbi = async dir => {
    const pathName = path.basename (dir);
    const inputDir = path.join (dirs.contractDir, pathName);
    const inputFile = path.join (inputDir, `${pathName}.cpp`);
    const outputDir = path.join (dirs.buildDir, pathName);
    const outputFile = path.join (outputDir, `${pathName}.abi`);

    fs.mkdirpSync (outputDir);
    const abiCommand = `eosiocpp -g ${outputFile} ${inputFile}`;
    return _compileContract (abiCommand, dir);
  };
  const compileWast = async dir => {
    const pathName = path.basename (dir);
    const inputDir = path.join (dirs.contractDir, pathName);
    const inputFile = path.join (inputDir, `${pathName}.cpp`);
    const outputDir = path.join (dirs.buildDir, pathName);
    const outputFile = path.join (outputDir, `${pathName}.wast`);
    fs.mkdirpSync (outputDir);

    const wastCmd = `eosiocpp -o ${outputFile} ${inputFile}`;
    return _compileContract (wastCmd, dir);
  };

  this.compile = async dir => {
    const eosiocpp = opts.eosiocpp || shelljs.which ('eosiocpp');
    if (!eosiocpp) {
      logger.info (
        `Sorry, this script requires eosiocpp. Either pass it as an option using the flag or add it to your $PATH and try again.`
      );
      shell.exit (1);
      reject ();
    }

      logger.info('compiling contract in directory:', dir);

    await compileWast (dir);
    await compileAbi (dir);
    logger.info ('Complete');
  };

  return this;
};
