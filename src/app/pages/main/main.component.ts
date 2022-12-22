import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sorteioID = "##";
  numSorteio = "# - # - #";
  montate = "#";
  cartelasJog = [];


  constructor(private contractService: ContractService) {}

  async ngOnInit(): Promise<void> {
    await this.contractService.connect();
    await new Promise(f => setTimeout(f, 500));
    this.contractService.getSorteio().then((response) =>{
      console.log(response);
      if (typeof response !== 'undefined') {
        this.atualizarInfosSorteio(response);
      }
    });
    this.contractService.getCartelasJogador().then((response) =>{
      // console.log(response);
      if (typeof response !== 'undefined') {
        this.cartelasJog = response;
      }
    });
  }

  atualizarInfosSorteio(sorteio: any) {
    this.sorteioID = sorteio.sorteioID;
    this.montate = sorteio.balance;

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
      console.log(response);
    }).catch((err) => {
      if (err.hasOwnProperty("error")) {
        alert(err.error);
        console.log(err);
      }
    });
  }

}

