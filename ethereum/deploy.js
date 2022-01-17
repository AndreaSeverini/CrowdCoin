
//Set truffle provider
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

//passing mnemonic from metamask and infura link to rinkeby
const provider = new HDWalletProvider(
    'hamster scare sand genius fence ridge slight what found damage blouse steak',
    'https://rinkeby.infura.io/v3/ae67eeb918bb43efa781bc43d4f81e2a'
);
const web3 = new Web3(provider); //Web3 instance 

//Setting a function to use 'await' 
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
    )
      .deploy({ data: compiledFactory.bytecode})
      .send({ gas: '1000000', from: accounts[0] });

    
    console.log('Contracts deployed to',result.options.address);
    provider.engine.stop(); //to prevent a hanging deployment
};
deploy();