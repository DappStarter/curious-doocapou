require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note museum unknown gloom argue bridge tube'; 
let testAccounts = [
"0x870fd4e209e3df64923fd7dfec4dcdc3367f3367273c01306a1eb1fe36771930",
"0x18d54a89a1fe80215a840d330b87fe64ec04aa7956f4d6a33f9b749cbc9bae20",
"0x9cfdee8316fd716229fe90a97d151fd9e298de35407960d86dbd209da090ede5",
"0xc2f09655857e1cb74ce78773a3ee32ab06ab627565dc9e2682c3e18a3c7fb80d",
"0xf53bd175c3dfcb3bf43f62c3b6bfcc45a7bb09b41100b9a32f1e3cb0856178fa",
"0x2df0bc02c0c3409402e2194142130e2ff7fe5640dcf36275e0421b6c5f96aea7",
"0xf0d8b8c8d11930ed1401a5c51b9b47d96c625392bd5d21a5c3a9ce31a49ed25e",
"0x145c647d75ee0762f7355cf27a0caca12ceb7a1810e83b38c93ff7416152aa3f",
"0x330601d396601e4e0748dc692e7f44d7cd73b06123eea7734315172293c6cb97",
"0x2c4fb99096c69d38689fba2c3d495b285745fa20077388296e0e610d0bdf68d0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
