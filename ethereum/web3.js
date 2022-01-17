//import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider);

//export default web3;
//DEPRECATED

//import Web3 from "web3";
 
//window.ethereum.request({ method: "eth_requestAccounts" });
 
//const web3 = new Web3(window.ethereum);
 
//export default web3;
//UPDATED TO CHECK IF WE ARE RUNNING IN THE BROWSER OR ON THE SERVER

import Web3 from "web3";
//we want to reassign this variable
let web3;
 
//Handle the cases where the application is running in browser and metamask is activated
//typeof look for a variable if it is declarated
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/ae67eeb918bb43efa781bc43d4f81e2a"
  );
  web3 = new Web3(provider);
}
 
export default web3;