import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

import { cryptoBingoABI, cryptoBingoAddress } from '../utils/abis';
declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  readonly METAMASK_KEY: string = 'metamask';

  public isIdentified: boolean = false;
  public isConnected: boolean = false;
  private TDAContract: any;

  async connect(): Promise<any> {
    if (typeof window.ethereum === 'undefined') {
      console.log("Metamask NOT Installed!");
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.send("eth_requestAccounts", []).then(() => {
      provider.listAccounts().then((accounts:any) => {
        const signer = provider.getSigner(accounts[0]);
        this.TDAContract = new ethers.Contract(
          cryptoBingoAddress,
          cryptoBingoABI,
          signer
        );
        this.isConnected = true;
        // console.log(this.TDAContract);
      });
    });
  }

  async getSorteio() {
    if(!this.isConnected || typeof this.TDAContract === 'undefined') {
      console.log("Contract NOT is Connected!");
    } else {
      return this.TDAContract.getSorteioAtualEXT();
    }
  }

  async getCartelasJogador() {
    if(!this.isConnected || typeof this.TDAContract === 'undefined') {
      console.log("Contract NOT is Connected!");
    } else {
      return this.TDAContract.getCartelasJogador();
    }
  }

  async comprarCartela() {
    if(!this.isConnected || typeof this.TDAContract === 'undefined') {
      console.log("Contract NOT is Connected!");
    } else {
      const weiX = "0.00000000000000001"; // 10 wei
      await this.TDAContract.comprarCartela({value: ethers.utils.parseEther(weiX)});
    }
  }



}
