// import {getNFTData} from "@/service/modules/common";
import JSEncrypt from "jsencrypt";
// import range from 'lodash/range';
// import ToastComponent from "../views/components/ToastComponent"
import Web3 from "web3";
import { numberToHex, stringToHex } from 'web3-utils';
import bignumber, { BigNumber } from "bignumber.js";
// import VueCookies from "vue-cookies";
import Vue from "vue";
// import chunk from "lodash/chunk";
// import i18n from "./i18n";
// let NodeRSA = require('node-rsa');
// Vue.use(VueCookies);

let web3 = require('web3')
web3 = new Web3(window.ethereum)


// 定义合约abi
const contract = {
  BNB:{
    address: '',
    decimal: 18,
    abi: '[]'
  },
  USDT: {
    abi:[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],
    decimal:18,
    name:"USDT",
    address:'0x55d398326f99059ff775485246999027b3197955'
  },
  USDC: {
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    decimal:18,
    abi:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"mintable","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}, {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"mintable","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  },
  BG:{
    address:'',
    decimal:18,
    abi:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPause","type":"bool"}],"name":"PauseTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_IDOAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_banListMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_clubRewardAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_deadAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_excludeFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_feeRateMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_groupAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_institutionalFinancingAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_jackpotPoolAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_swapAddrMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_totalReceiveFeeMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_transferFeeReceiveAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"setBanList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"setExcludeFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isPause","type":"bool"}],"name":"pauseTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setJackpotFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setClubFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setDeadFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setTransferFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"setSwapAddrMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGroupAddr","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setInstitutionalFinancingAddr","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setJackpotPoolAddr","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setIDOAddrAddr","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setClubRewardAddr","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
  },
};

//controlAddress
const BoxAddress = "";
const BoxAbi = [{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "account","type": "address"},{"indexed": false,"internalType": "uint256","name": "salt","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "count","type": "uint256"}],"name": "BuySuccess","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "account","type": "address"}],"name": "Paused","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "account","type": "address"}],"name": "Unpaused","type": "event"},{"inputs": [],"name": "buyPause","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "buyStart","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "buySuccessList","outputs": [{"internalType": "address","name": "account","type": "address"},{"internalType": "uint256","name": "salt","type": "uint256"},{"internalType": "uint256","name": "count","type": "uint256"},{"internalType": "uint256","name": "mintCount","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getBingoNFTContractAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getBuyAble","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getERC20ContractAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getERC721ContractAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getMainAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getMainCoinPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "paused","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_contractAddress","type": "address"}],"name": "setBingoNFTContractAddress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_contractAddress","type": "address"}],"name": "setERC20ContractAddress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_contractAddress","type": "address"}],"name": "setERC721ContractAddress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_account","type": "address"}],"name": "setMainAddress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_price","type": "uint256"}],"name": "setMainCoinPrice","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_price","type": "uint256"}],"name": "setPrice","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "count","type": "uint256"}],"name": "setTokenCountLimit","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "tokenCountLimit","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "tokenTotal","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "salt","type": "uint256"},{"internalType": "uint256","name": "count","type": "uint256"}],"name": "buy","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "address[]","name": "accounts","type": "address[]"},{"internalType": "uint256[]","name": "indexes","type": "uint256[]"},{"internalType": "uint256[]","name": "tokenIds","type": "uint256[]"},{"internalType": "string[]","name": "uris","type": "string[]"}],"name": "mint","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address[]","name": "accounts","type": "address[]"},{"internalType": "uint256[]","name": "indexes","type": "uint256[]"},{"internalType": "uint256[]","name": "tokenIds","type": "uint256[]"},{"internalType": "string[]","name": "uris","type": "string[]"}],"name": "mintBingoNFT","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "index","type": "uint256"}],"name": "getMintCount","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "salt","type": "uint256"}],"name": "isBuySuccess","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "index","type": "uint256"}],"name": "getBuySuccessData","outputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "account","type": "address"}],"name": "getBuySuccessTotal","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getBuySuccessTotal","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "index","type": "uint256"}],"name": "getTokenList","outputs": [{"internalType": "uint256[]","name": "tokenIds","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "start","type": "uint256"},{"internalType": "uint256","name": "limit","type": "uint256"}],"name": "getBuySuccessList","outputs": [{"internalType": "address[]","name": "accounts","type": "address[]"},{"internalType": "uint256[]","name": "salts","type": "uint256[]"},{"internalType": "uint256[]","name": "counts","type": "uint256[]"},{"internalType": "uint256[]","name": "_indexes","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "account","type": "address"},{"internalType": "uint256","name": "start","type": "uint256"},{"internalType": "uint256","name": "limit","type": "uint256"}],"name": "getAccountBuySuccessList","outputs": [{"internalType": "address[]","name": "accounts","type": "address[]"},{"internalType": "uint256[]","name": "salts","type": "uint256[]"},{"internalType": "uint256[]","name": "counts","type": "uint256[]"},{"internalType": "uint256[]","name": "mintCounts","type": "uint256[]"},{"internalType": "uint256[]","name": "_indexes","type": "uint256[]"}],"stateMutability": "view","type": "function"}];

const ExchangeAddress = '';
const ExchangeAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"}],"name":"AdminCloseOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"}],"name":"BuyNFT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"}],"name":"CloseOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nftAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"status","type":"uint256"}],"name":"EditNFTData","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPaused","type":"bool"}],"name":"PausedTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"address","name":"sellerAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PendingOrder","type":"event"},{"inputs":[],"name":"_transToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderID_","type":"uint256"}],"name":"adminCloseOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"orderIDArr_","type":"uint256[]"}],"name":"batchBuyOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"orderIDArr_","type":"uint256[]"}],"name":"batchCloseOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"nftAddrArr_","type":"address[]"},{"internalType":"uint256[]","name":"tokenIDArr_","type":"uint256[]"},{"internalType":"uint256[]","name":"priceArr_","type":"uint256[]"}],"name":"batchPendingOrder","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderID_","type":"uint256"}],"name":"buyOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderID_","type":"uint256"}],"name":"closeOrder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftAddr","type":"address"},{"internalType":"uint256","name":"status","type":"uint256"}],"name":"editNFTData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCollectionAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftAddr","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getOrderByTokenID","outputs":[{"components":[{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"address","name":"nftAddr","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"sellerAddr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"shelfTime","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"}],"internalType":"struct NFTExchange.Order[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"param","type":"address"}],"name":"getOrderByUserAddr","outputs":[{"components":[{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"address","name":"nftAddr","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"sellerAddr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"shelfTime","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"}],"internalType":"struct NFTExchange.Order[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderID","type":"uint256"}],"name":"getOrderInfo","outputs":[{"components":[{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"address","name":"nftAddr","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"sellerAddr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"shelfTime","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"}],"internalType":"struct NFTExchange.Order","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransferFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPauseTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"param","type":"bool"}],"name":"pauseTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftAddr_","type":"address"},{"internalType":"uint256","name":"tokenID_","type":"uint256"},{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"pendingOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"param","type":"address"}],"name":"setBingoToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"param","type":"uint256"}],"name":"setBlacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"param","type":"address"}],"name":"setCollectionAddr","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"param","type":"uint256"}],"name":"setTransferFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"param","type":"uint256"}],"name":"setWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"totalOrder","outputs":[{"components":[{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"address","name":"nftAddr","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"sellerAddr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"shelfTime","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"}],"internalType":"struct NFTExchange.Order[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export const PlayerNFT = '';
const PlayerNFTAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"param","type":"uint256"}],"name":"addMaxSupply","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"tokenId_","type":"uint256[]"},{"internalType":"string[]","name":"uri_","type":"string[]"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBuyContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"param","type":"address"}],"name":"getWhiteList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"string","name":"uri_","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"param","type":"address"}],"name":"setBuyContractAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"param","type":"string"}],"name":"setUriPre","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"param","type":"uint256"}],"name":"setWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"tokenIDArrByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export const BingoNFT = '';
const BingoNFTAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"param","type":"uint256"}],"name":"addMaxSupply","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"tokenId_","type":"uint256[]"},{"internalType":"string[]","name":"uri_","type":"string[]"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBuyContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"param","type":"address"}],"name":"getWhiteList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"string","name":"uri_","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"param","type":"address"}],"name":"setBuyContractAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"param","type":"string"}],"name":"setUrlPre","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"param","type":"uint256"}],"name":"setWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"tokenIDArrByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export const ActivityAddress = '';
const ActivityAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Exchange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DeadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFTContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"managerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setManagerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setNFTContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setUSDAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"exchangePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getExchange","outputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"drawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getBackPool","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const platformAddress = "0x01";
const NFTControl = '0x01';
const NFTMarketAddress = '0x01';
const pubKey = `-----BEGIN PUBLIC KEY-----
0x01
-----END PUBLIC KEY-----`;



/**
 * 界面加插件
 * @param id
 * @param url
 * @returns {Promise<unknown>}
 */
export const addScript = (id, url) =>
  new Promise(resolve => {
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.id = id;
      script.src = url;
      document.body.appendChild(script);
      script.onload = () => {
        resolve();
      };
    } else {
      resolve();
    }
  });

/**
 * 加密字符串,分片
 * @param str
 * @returns {string | false}
 */
export const getRsaCode = str => {
  const encryptStr = new JSEncrypt();
  encryptStr.setPublicKey(pubKey); // 设置 加密公钥
  // 进行加密
  return encryptStr.encrypt(str.toString());
};

export const publicRsaDecode = str => {
  let key = new NodeRSA(pubKey); // 设置你的公钥
  return key.decryptPublic(str.toString(),"utf-8")
};



//获取用户地址
export const getUserAddress = function() {
  return getEthereum().selectedAddress;
};

//调起钱包弹框界面
export const requestUserAddress = function() {
  let ethereum = getEthereum();
  if (ethereum == null) {
    // Toast(i18n.t('pleaseInstallWallet'))
    return;
  }
  return ethereum
    .request({ method: "eth_requestAccounts" })
    .then(response => {
      return response[0];
    })
    .catch(error => {
      //console.log(error)
      return error
    });
};

//添加指定BSC链接
export const addNetwork = function() {
  var params = [
    {
      chainId: "0x61",
      chainName: "Binance test Chain testnet",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18
      },
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      blockExplorerUrls: ["https://testnet.bscscan.com/"]
    }
    // {
    //   chainId: "0x38",
    //   chainName: "Binance Smart Chain Mainnet",
    //   nativeCurrency: {
    //     name: "BNB",
    //     symbol: "BNB",
    //     decimals: 18
    //   },
    //   rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    //   blockExplorerUrls: ["https://bscscan.com/"]
    // }
  ];
  return getEthereum()
    .request({ method: "wallet_addEthereumChain" })
    .then(() => {
      ////console.log('Switch to BSC success')
      return true;
    })
    .catch(error => {
      //console.log("Error", error);
      return false;
    });
};

//初始化ethereum对象
export const getEthereum = function() {
  let ethereum = window.ethereum;
  if (ethereum == null) {
    // Toast(i18n.t('pleaseInstallWallet'))
    return;
  }
  if (!ethereum) {
    return -1
  }
  return ethereum;
};

/**
 * 显示缩略地址
 * 0X7Y....HDGA
*/
export const getUserShowAddress = function() {
  const userAddress = getEthereum().selectedAddress;
  if (!userAddress) return "";

  return `${userAddress.substring(0, 4)}...${userAddress.substring(
    userAddress.length - 4,
    userAddress.length
  )}`;
};

/**
 * 查询用户余额
 * userAddress:用户地址
 * coinType:币种名称
 * ***/
export const balanceOf = function (userAddress, coinType) {
  if (!userAddress) return new Promise(function () {return 0})
  if (coinType === 'BNB') {
    return web3.eth.getBalance(userAddress)
  } else {
    let contractCoin = contract[coinType]
    return new web3.eth.Contract(contractCoin.abi, contractCoin.address).methods
        .balanceOf(userAddress).call().then(res => {
          return res;
        }).catch(error => {
          //console.log(error)
        });
  }
}

/**
 * 发起交易
 * toAddress:目标地址
 * coinType:币种
 * amount:数量
 * */ 
export const transfer = function (toAddress, coinType, amount) {
  amount = new bignumber(amount)
  const ethereum = getEthereum();
  if (!ethereum) return;
  const userAddress = getUserAddress();
  return web3.eth.getTransactionCount(userAddress).then(count => {

    let gasLimit = 601839;

    let contractCoin = contract[coinType]
    if (coinType === "BNB") {
      return ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: userAddress,
          nonce: numberToHex(count),
          to: toAddress,
          value: numberToHex(decimalToWei(amount, contractCoin.decimal)),
          gasPrice: numberToHex('5500000000'),
          gas: numberToHex(21000)
        }]
      }).catch(error => {
        //console.log(error)
      });
    } else {
      let contractIns = new web3.eth.Contract(contractCoin.abi, contractCoin.address)
      return ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: userAddress,
          nonce: numberToHex(count),
          to: contractCoin.address,
          value: 0x0,
          gasPrice: numberToHex('5500000000'),
          gas: numberToHex(gasLimit),
          data: contractIns.methods.transfer(toAddress, decimalToWei(amount, contractCoin.decimal)).encodeABI()
        }]
      }).catch(error => {
        //console.log(error)
      });
    }
  })

};

/**
 * 是否已经授权NFT
 */
export const isApproveNFT = function() {
  let userAddress = getUserAddress();
  let contractCoin = contract.BNFT
  return new web3.eth.Contract(contractCoin.abi, contractCoin.address).methods
      .isApprovedForAll(userAddress, NFTControl).call().then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
      });
};

/**
 * 是否已经挂卖nft
 */
export const isNFTOnMarket = async function(tokenId) {
  //console.log(tokenId)
  let contractCoin = contract.BNFT
  return new web3.eth.Contract(contractCoin.abi, contractCoin.address).methods
      .ownerOf(tokenId).call().then(res => {
        return res === NFTMarketAddress;
      }).catch(error => {
        //console.log(error)
        return false
      });
};

/**
 * 授权平台可以转移nft,
 */
export const approveNFT = async function() {
  let ethereum = getEthereum();
  if (!ethereum) return;
  const userAddress = getUserAddress();
  return web3.eth.getTransactionCount(userAddress).then(count => {
    let contractCoin = contract.BNFT
    let contractIns = new web3.eth.Contract(contractCoin.abi, contractCoin.address)
    return ethereum.request({
      method: "eth_sendTransaction",
      params: [{
        from: userAddress,
        nonce: numberToHex(count),
        to: contractCoin.address,
        value: 0x0,
        gasPrice: numberToHex('6500000000'),
        gas: numberToHex('50000'),
        data: contractIns.methods.setApprovalForAll(NFTControl, true).encodeABI()
      }]
    }).then(async hashId => {
      let result = await getTransactionReceiptMined(hashId)
      if (result.status === true) {
        // Toast(i18n.t('approveSuccess!'))
        return true
      }
    });
  })
};


/**
 * 授权平台可以转移代币
 */
export const approve = function(coinType, amount) {
  amount = new bignumber(amount)
  //console.log('approve', coinType, amount)
  //调起ethereum的授权确认界面
  let ethereum = getEthereum();
  if (!ethereum) return;
  const userAddress = getUserAddress();
  return web3.eth.getTransactionCount(userAddress).then(count => {
    //console.log(count)
    let contractCoin = contract[coinType]
    let contractIns = new web3.eth.Contract(contractCoin.abi, contractCoin.address)
    return ethereum.request({
      method: "eth_sendTransaction",
      params: [{
        from: userAddress,
        nonce: numberToHex(count),
        to: contractCoin.address,
        value: 0x0,
        gasPrice: numberToHex('5000000000'),
        gas: numberToHex('8500000'),
        data: contractIns.methods.approve(BoxAddress, decimalToWei(amount, contractCoin.decimal)).encodeABI()
      }]
    });
  }).catch(err => {
    //console.log(err)
  })
};
/**
 * 授权平台可以转移代币
 */
 export const approve2 = function(coinType, amount) {
    amount = new bignumber(amount)
    //调起ethereum的授权确认界面
    let ethereum = getEthereum();
    if (!ethereum) return;
    const userAddress = getUserAddress();
    return web3.eth.getTransactionCount(userAddress).then(count => {

        let contractCoin = contract[coinType]
        let contractIns = new web3.eth.Contract(contractCoin.abi, contractCoin.address)
        return ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: userAddress,
                nonce: numberToHex(count),
                to: contractCoin.address,
                value: 0x0,
                gasPrice: numberToHex('5000000000'),
                gas: numberToHex('80000'),
                data: contractIns.methods.approve(BoxAddress, decimalToWei(amount, contractCoin.decimal)).encodeABI()
            }]
        });
    })
}
/**
 * 授权平台可以转移代币
 */
 export const approve3 = function(coinType, amount) {
  amount = new bignumber(amount)
  let contractCoin = contract[coinType]
  const userAddress = getUserAddress();
  let contractIns = new web3.eth.Contract(contractCoin.abi, contractCoin.address)
  // //console.log(contractIns.methods)
  return contractIns.methods.approve(ExchangeAddress,amount).send({from:userAddress}).then(res => {
    return res
  }).catch(err => {
    //console.log(err)
  })
}

/**
 * 检查授权额度
 * @returns {*}
 */
export const checkApprove = function(coinType, amount) {
  let userAddress = getUserAddress();
  let contractCoin = contract[coinType]
  return new web3.eth.Contract(contractCoin.abi, contractCoin.address).methods
      .allowance(userAddress, platformAddress).call().then(res => {
        //console.log(res)
        return res >= amount;
      }).catch(error => {
        //console.log(error)
      });
};


/**
 * 是否已经授权
 * @returns {*}
 */
export const isApprove = function(coinType) {
  //实现判断 userAddress 是否把代币权限授予了 BoxAddress 返回bool
  let userAddress = getUserAddress();

  let contractCoin = contract[coinType]
  return new web3.eth.Contract(contractCoin.abi, contractCoin.address).methods
      .allowance(userAddress, BoxAddress).call().then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
      });
};
/**
 * 是否已经授权给交易所
 * @returns {*}
 */
export const isApproveEx = function(coinType) {
  //实现判断 userAddress 是否把代币权限授予了 BoxAddress 返回bool
  let userAddress = getUserAddress();

  let contractCoin = contract[coinType]
  return new web3.eth.Contract(contractCoin.abi, contractCoin.address).methods
      .allowance(userAddress, ExchangeAddress).call().then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
      });
};


/**
 * 等待完成
 * @param hashId
 * @returns {Promise<unknown>|Promise<unknown[]>}
 */
export const getTransactionReceiptMined = function (hashId) {
  let interval = 1000
  const transactionReceiptAsync = function(resolve, reject) {
    web3.eth.getTransactionReceipt(hashId, (error, receipt) => {
      if (error) {
        reject(error);
      } else if (receipt == null) {
        setTimeout(() => transactionReceiptAsync(resolve, reject),
            interval ? interval : 500);
      } else {
        resolve(receipt);
      }
    }).then(r => {

    });
  };
  if (Array.isArray(hashId)) {
    return Promise.all(hashId.map(
        oneTxHash => getTransactionReceiptMined(oneTxHash, interval)));
  } else if (typeof hashId === "string") {
    return new Promise(transactionReceiptAsync);
  } else {
    throw new Error("Invalid Type: " + hashId);
  }
};


/**
 * 签名
 * @param string
 * @returns {Promise<string>}
 */
export const sign = function (string) {
  return getEthereum().request({
    method:"personal_sign",
    params: [stringToHex(string), getUserAddress()]
  }).then(res => {
    return res
  }).catch(err => {
    return err
  })
}

export const weiToDecimal = function (amount, decimal = 18 ) {
  return web3.utils.fromWei(amount.toString(), 'ether')
}

export const decimalToWei = function (amount, decimal = 18 ) {
  return web3.utils.toWei(amount.toString(), 'ether')
}

/**
 * 获取用户指定nft的卡列表
 */
export const getMyNFT = function(pageStart, pageSize, role=0, level=0) {
  return getNFTData({pageStart: pageStart, pageSize: pageSize,role:role,level:level}).then(res => {
    return res
  })
};

export const getUrlKey = function(name){
  return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}
/**
 * 获取盲盒价格
 * ***/
 export const getBoxPrice = function () {
  // //console.log(new web3.eth.Contract(BoxAbi, BoxAddress).methods)
  return new web3.eth.Contract(BoxAbi, BoxAddress).methods
      .getPrice().call().then(res => {
        // //console.log(weiToDecimal(res))
        return weiToDecimal(res);
      }).catch(error => {
        //console.log(error)
      });
}

/**
 * 获取盲盒价格
 * ***/
export const getBoxPrice2 = function () {
    // //console.log(new web3.eth.Contract(BoxAbi, BoxAddress).methods)
    return new web3.eth.Contract(BoxAbi, BoxAddress).methods
        .getBuySuccessTotal().call().then(res => {
            console.log(res)
        }).catch(error => {
            //console.log(error)
        });
}
/**
 * 获取购买盲盒
 * e：salt
 * ***/
 export const buyBox = function (e,a) {
  //console.log(new web3.eth.Contract(BoxAbi, BoxAddress))
  let userAddress = getUserAddress();
  // let _value = new bignumber(0.02)
  let priceMap = {1:decimalToWei("0.002"), 10:decimalToWei("0.02"),100:decimalToWei("0.2")}
    let _value = priceMap[a]
  // let _value = 1
  return new web3.eth.Contract(BoxAbi, BoxAddress
    // ,{
    // from:userAddress,
    // value:_value
    //gasPrice: numberToHex('5500000000'),
    //gas: numberToHex('5000000'),
    // amount:_value
  // }
  ).methods
      .buy(numberToHex(e),numberToHex(a)).send({
        from:userAddress,
        value:_value
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}

/**
 * 获取用户的抽卡信息
 * 当count == mintCount 时, 标识区块已确认
 * ***/
 export const getAccountBuySuccessList = function (start,limit) {
  //console.log(start)
  //console.log(limit)
  // return
  let userAddress = getUserAddress();
  return new web3.eth.Contract(BoxAbi, BoxAddress).methods
      .getAccountBuySuccessList(userAddress,numberToHex(start),numberToHex(limit)).call().then(res => {
        //console.log(res)
        return res
      }).catch(error => {
        //console.log(error)
        return error
        
      });
}
/**
 * 获取用户的nft token
 * 当init = index
 * ***/
 export const getTokenList = function (init) {
 
  let userAddress = getUserAddress();
  return new web3.eth.Contract(BoxAbi, BoxAddress).methods
      .getTokenList(init).call().then(res => {
        return res
      }).catch(error => {
        //console.log(error)
        return error
       
      });
}
/**
 * 获取用户的nft购买次数
 * 当init = index
 * ***/
 export const getBuySuccessTotal = function () {
 
  let userAddress = getUserAddress();
  return new web3.eth.Contract(BoxAbi, BoxAddress).methods
      .getBuySuccessTotal(userAddress).call().then(res => {
        return res
      }).catch(error => {
        //console.log(error)
        return error
       
      });
}

/**
 * 截取用户NFT tokenid 得到uri
 * 
 * ***/
 export const getTokenId = function getTokenId(e) {
  let t = BigNumber(e,10).toString(16)
  // t.length==64?'':t = (64-t.length)*'0'+t
  for(;t.length<64;){
    t = '0'+t;
  }
  
  let a = t.substring(8,47)
  let main =BigNumber(a,16).toString(10)
  //console.log(t)
  let type = Number(main.substring(1,23))
  let id = main.substring(27,31)
  let rarity = Number(main.substring(31,33))
  let rarityType 
  switch (rarity) {
    case 0:
      rarityType = 'N'
      break;
    case 1:
      rarityType = 'R'
      break;
    case 2:
      rarityType = 'S'
      break;
  
    default: rarityType = 'N'
      break;
  }
  if(type == 0){
    let num = main%7
    return 'bingo/'+num+'.png'
  }else{
    return  insertStr(id,2,'/')+'/'+rarityType+'.png'
  }
  
  
}
//指定位置插入str
export const insertStr = function insertStr(soure, start, newStr){   
  return soure.slice(0, start) + newStr + soure.slice(start);
}

/**
 * 批量挂单
 * arr：NFT地址集合
 * idArr：tokenid地址集合
 * priceArr：价格地址集合
 * ***/
 export const batchPendingOrder = function (arr,idArr,priceArr) {

  for(let i=0;i<priceArr.length;i++){
    priceArr[i] = decimalToWei(priceArr[i])
  }
  //console.log(priceArr)
  // //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  // let _value = new bignumber(0.02)
  let _value = 1
  return new web3.eth.Contract(ExchangeAbi, ExchangeAddress
   ).methods
      .batchPendingOrder(arr,idArr,priceArr).send({
        from:userAddress,
        // value:_value
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}
/**
 * 批量取消挂单
 * idArr：orderid地址集合
 * ***/
 export const batchCloseOrder = function (idArr) {
  //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  // let _value = new bignumber(0.02)
  let _value = 1
  return new web3.eth.Contract(ExchangeAbi, ExchangeAddress
   ).methods
      .batchCloseOrder(idArr).send({
        from:userAddress,
        value:_value
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}
/**
 * 批量购买NFT订单
 * idArr：tokenid地址集合
 * ***/
 export const batchBuyOrder = function (idArr) {
  //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  // let _value = new bignumber(0.02)
  let _value = 1
  return new web3.eth.Contract(ExchangeAbi, ExchangeAddress
   ).methods
      .batchBuyOrder(idArr).send({
        from:userAddress,
        value:_value
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}

/**
 * 挂单
 * nftAddr：nft地址
 * tokenid：tokenid
 * price:价格
 * ***/
 export const pendingOrder = function (nftAddr,tokenid,price) {
  //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  // let _value = new bignumber(0.02)
  let _value = 1
  return new web3.eth.Contract(ExchangeAbi, ExchangeAddress
   ).methods
      .pendingOrder(nftAddr,tokenid,price).send({
        from:userAddress,
        value:_value
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}
/**
 * 下架
 * orderId：orderId
 * ***/
 export const  closeOrder = function (orderId) {
  //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  // let _value = new bignumber(0.02)
  return new web3.eth.Contract(ExchangeAbi, ExchangeAddress
   ).methods
      .closeOrder(orderId).send({
        from:userAddress
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}
/**
 * 购买
 * orderId：orderId
 * ***/
 export const  buyOrder = function (orderId) {
  //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  // let _value = new bignumber(0.02)
  let _value = 1
  return new web3.eth.Contract(ExchangeAbi, ExchangeAddress
   ).methods
      .buyOrder(orderId).send({
        from:userAddress,
        // value:_value
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}

/**
 * 授权交易所可以转移nft(全部)
 * type:1player 2 bingo
 */
 export const setApprovalForAll = function(type) {
  let contractAddr
  let contractAbi
  if(type == 1){
    contractAddr = PlayerNFT
    contractAbi = PlayerNFTAbi
  }else{
    contractAddr = BingoNFT
    contractAbi = BingoNFTAbi
  }
  const userAddress = getUserAddress();
  let contractIns = new web3.eth.Contract(contractAbi, contractAddr)
  // //console.log(contractIns.methods)
  return contractIns.methods.setApprovalForAll(ExchangeAddress,true).send({from:userAddress}).then(res => {
    return res
  }).catch(err => {
    //console.log(err)
  })
}
/**
 * 是否已经全部授权NFT
 * type:1player 2 bingo
 */
 export const isApprovedForAll = async function(type) {
  const userAddress = getUserAddress();
  let contractAddr
  let contractAbi
  if(type == 1){
    contractAddr = PlayerNFT
    contractAbi = PlayerNFTAbi
  }else{
    contractAddr = BingoNFT
    contractAbi = BingoNFTAbi
  }
  return new web3.eth.Contract(contractAbi, contractAddr).methods
      .isApprovedForAll(userAddress,ExchangeAddress).call().then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return false
      });
};
/**
 * 授权活动可以转移nft(全部)
 * type:1player 2 bingo
 */
 export const setApprovalForAllActivity = function(type) {
  let contractAddr
  let contractAbi
  if(type == 1){
    contractAddr = PlayerNFT
    contractAbi = PlayerNFTAbi
  }else{
    contractAddr = BingoNFT
    contractAbi = BingoNFTAbi
  }
  const userAddress = getUserAddress();
  let contractIns = new web3.eth.Contract(contractAbi, contractAddr)
  // //console.log(contractIns.methods)
  return contractIns.methods.setApprovalForAll(ActivityAddress,true).send({from:userAddress}).then(res => {
    return res
  }).catch(err => {
    //console.log(err)
  })
}
/**
 * 是否已经全部授权NFT给活动
 * type:1player 2 bingo
 */
 export const isApprovedForAllActivity = async function(type) {
  const userAddress = getUserAddress();
  let contractAddr
  let contractAbi
  if(type == 1){
    contractAddr = PlayerNFT
    contractAbi = PlayerNFTAbi
  }else{
    contractAddr = BingoNFT
    contractAbi = BingoNFTAbi
  }
  return new web3.eth.Contract(contractAbi, contractAddr).methods
      .isApprovedForAll(userAddress,ActivityAddress).call().then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return false
      });
};
/**
 * 参与活动
 * arr：tokenid地址集合
 * 
 * ***/
 export const exchangePrice = function (arr) {
  // //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  return new web3.eth.Contract(ActivityAbi, ActivityAddress
   ).methods
      .exchangePrice(arr).send({
        from:userAddress,
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}
/**
 * 获取用户的活动余额
 * 
 * ***/
 export const eventBalanceOf = function (init) {
 
  let userAddress = getUserAddress();
  return new web3.eth.Contract(ActivityAbi, ActivityAddress).methods
      .balanceOf(userAddress).call().then(res => {
        return weiToDecimal(res)
      }).catch(error => {
        //console.log(error)
        return error
       
      });
}
/**
 * 领取活动余额
 *
 * ***/
 export const drawRewards = function () {
  // //console.log(new web3.eth.Contract(ExchangeAbi, ExchangeAddress))
  let userAddress = getUserAddress();
  return new web3.eth.Contract(ActivityAbi, ActivityAddress
   ).methods
      .drawRewards().send({
        from:userAddress,
      }).then(res => {
        return res;
      }).catch(error => {
        //console.log(error)
        return error
      });
}
/**
 * 复制文本到剪切板
 * @param stringCopy
 */
export const copyString = function (stringCopy) {
  let aux = document.createElement("input");
  aux.setAttribute("value", stringCopy);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

export const isEnglish = function () {
  return Vue.$cookies.get("lang") === "en"
}

export const formatSecond = function (value, s = true, m = true, h = true) {
  var theTime = parseInt(value); // 秒
  var theTime1 = 0; // 分
  var theTime2 = 0; // 小时
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);
    }
  }
  var result = ""
  if (s) result = "" + parseInt(theTime) + (isEnglish()?'s':"秒");
  if (theTime1 > 0 && m) {
    result = "" + parseInt(theTime1) + (isEnglish()?'m':"分") + result;
  }
  if (theTime2 > 0 && h) {
    result = "" + parseInt(theTime2) + (isEnglish()?'h':"小时") + result;
  }
  return result;
}

export const RsaEncode = function (params) {
  //加密传输
  const str = JSON.stringify(params)
  const arr = str.split("");
  const chunkArrs = chunk(arr, 80);

  let string = ""
  chunkArrs.map(item => string += getRsaCode(item.join("")));
  return string
}

export const RsaDecode = function (params) {
  const arr = params.split("")
  const chunkArrs = chunk(arr, 344)
  let string = ""
  chunkArrs.map(item => string += publicRsaDecode(item.join("")));
  return string
}

//生成从minNum到maxNum的随机数
export const randomNum = function (minNum, maxNum){
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1,10);
    case 2:
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
    default:
      return 0;
  }
}
