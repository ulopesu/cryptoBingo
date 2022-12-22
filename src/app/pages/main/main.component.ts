import { Component } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sorteioID = "##"

  constructor(private contractService: ContractService) {}

  async ngOnInit(): Promise<void> {
    this.contractService.loadWeb3();
    // this.contractService.getSorteio().then(
    //   (result) => {
    //     console.log(result);
    //     // this.sorteioID = result.sorteioID;
    //   }
    // )
  }
}
