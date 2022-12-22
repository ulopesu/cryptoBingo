import { Injectable } from '@angular/core';
const Web3 = require('web3');
import { AbiItem } from 'web3-utils';
import Abi from './abi.json';

import { cryptoBingoABI, cryptoBingoAddress } from '../utils/abis';
declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private web3: typeof Web3 | undefined;
  private accounts: any;

  async loadWeb3() {
    console.log('Loading web3', window.ethereum);
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      var contract = new this.web3.eth.Contract(
        Abi as AbiItem[],
        cryptoBingoAddress
      );
      await contract.methods
        .getSorteioAtualEXT()
        .call()
        .then((info: any) => {
          console.log('info: ', info);
        });
    }
  }
}
