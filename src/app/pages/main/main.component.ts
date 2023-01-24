import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sorteioID: any = "##";
  numSorteio = "# - # - #";
  montate = "#";
  cartelasJogador = [];
  cartelasEmJogo = [];
  cartelasForaDeJogo = [];
  vix_count = 0;
  is_loaded = false;

  constructor(private contractService: ContractService) {}

  async ngOnInit(): Promise<void> {
    await this.contractService.connect();
    await new Promise(f => setTimeout(f, 500));
    this.contractService.getSorteio().then((response) => {
      // console.log(response);
      if (typeof response !== 'undefined') {
        this.atualizarInfosSorteio(response);
      }
    });

    this.contractService.getCartelasJogador().then((response) =>{
      if (typeof response !== 'undefined') {
        this.cartelasJogador = response;
        // invertendo lista
        const cartelasJogador2 = [...this.cartelasJogador];
        this.cartelasJogador = cartelasJogador2.reverse();
        // console.log(this.cartelasJogador);
      }
    });
  }

  ngDoCheck() {
    if(
      this.sorteioID !== "##" &&
      this.cartelasJogador.length > 0 &&
      !this.is_loaded
    ){
      this.cartelasEmJogo = [];
      this.vix_count = 0;

      for (let cartela of this.cartelasJogador) {
        if(cartela["premiada"]){
          this.vix_count++;
        }
        if(cartela[1]["_hex"] == this.sorteioID._hex) {
          this.cartelasEmJogo.push(cartela);
        }
      }
      // console.log(this.vix_count);
      this.is_loaded = true;
    }
  }

  atualizarInfosSorteio(sorteio: any) {
    this.sorteioID = sorteio.sorteioID;
    this.montate = ethers.utils.formatEther(sorteio.balance);

    // PEGA NÚMEROS SORTEADOS
    this.numSorteio = "";
    const lenNums = sorteio.numSorteados.length;
    for (var val in sorteio.numSorteados) {
      const num = sorteio.numSorteados[val];
      if(Number(val) + 1 < lenNums) {
        this.numSorteio += `${String(num)} - `;
      } else {
        this.numSorteio += `${String(num)}`;
      }
    }
  }

  comprarCartela() {
    this.contractService.comprarCartela().then((response) =>{
      // console.log(response);
    }).catch((err) => {
      if (err.hasOwnProperty("error")) {
        alert(err.error);
        console.log(err);
      }
    });
  }

  refresh(): void {
    window.location.reload();
  }
}

