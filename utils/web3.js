import Web3 from "web3";

const web3= new Web3("https://alfajores-forno.celo-testnet.org")

const privateKey = "07Minto123#!"

const account = web3.eth.accounts.privateKeyToAccount(privateKey)

console.log(privateKey)