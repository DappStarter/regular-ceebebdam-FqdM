require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth mirror protect give climb october seed'; 
let testAccounts = [
"0x4ecbc0d995dce203a3e11f1c6e9b9bdfad4cd69bd34c6095a0b8ffbe08d02ad7",
"0xbaf007cd716600fb31efd98684378d0ba8b7ab2e2a499f48026fb7d3f4926382",
"0xb4ffdc3a485eb958f35d7278fbbf868c0cbcfadce48c8a39c7580aad8fa43689",
"0x7ac9548992c1db991a742bfadee33f0ce270124c3ec23fa6aeba719cbe627f39",
"0x4073bee85dc7c5bdca5118090969e004a4b29190d2117b00252731b5853927a4",
"0x43ff16547b905fd34a405cdf9b65b29a00f3c7a073866c37974ebd2416a36cda",
"0xdfa12d33244f12f16409daf65b7da093c7e688561ac8049dd645cffd0e6d79e6",
"0x24cb1c83421a23de19219a28bb0f80f96b2292bd84a1620325df2c203e812752",
"0xc0d5eec5019b052a82604fa96a42bb24e0685c798717823cb0a608c31d720455",
"0x1fb6fd72785e2fb89adf6e555063b8d2633a0e5d6e707422df3132dfa74e8ed1"
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
            version: '^0.8.0'
        }
    }
};

