const path = require ('path');
const fs = require ('fs-extra');
const lib = require ('./lib');

module.exports = async function (opts = {}) {
  
  const {eos, envConfig, logger, dirs} = await lib (opts);

  const loadWasmFile = async name => {
    const wasmFile = findContract (name, 'wasm');
    if (!wasmFile) {
      throw new Error (`No wasm file`);
    }
    const wasm = fs.readFileSync (wasmFile);
    return wasm;
  };

  const loadAbiFile = async name => {
    const abiFile = findContract (name, 'abi');
    if (!abiFile) {
      throw new Error (`No abi file`);
    }
    const abi = fs.readFileSync (abiFile);
    return abi;
  };

  const deployWast = async name => {
    try {
      logger.info (`Deploying contract ${name} wasm`);

      const wasm = await loadWasmFile (name);
      await eos.setcode (envConfig.tokenAccount, 0, 0, wasm, {
        authorization: `${envConfig.tokenAccount}@active`,
      });
    } catch (e) {
      logger.error (`Error setting ${name} code`, e);
      throw e;
    }
  };

  const deployAbi = async name => {
    try {
      logger.info (`Deploying contract ${name} abi`);

      const abi = await loadAbiFile (name);
      await eos.setabi (envConfig.tokenAccount, JSON.parse (abi), {
        authorization: `${envConfig.tokenAccount}@active`,
      });
    } catch (e) {
      logger.error (`Error setting ${name} abi`, e);
      throw e;
    }
  };

  this.deploy = async name => {
    try {
      const dir = path.join (dirs.contractDir, name);
      logger.info (`Compile contract: ${dir}`);
      await this.compile (dir);
    } catch (e) {
      logger.error ('Error occurred compile contract', e);
    }

    await deployWast (name);
    await deployAbi (name);
    // const out = await eos.setabi (envConfig.tokenAccount, JSON.parse (abi));
  };

  return this;
};
