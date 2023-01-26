import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent {
  sorteios: any = {};
  sorteiosID: string[] = [];
  vix_count = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    if(typeof history.state.cartelasForaDeJogo === 'undefined') {
      this.router.navigate(['']);
      return;
    }
    this.vix_count = history.state.vix_count;
    const cartelasForaDeJogo = history.state.cartelasForaDeJogo;

    let cartelasCopy = [];
    for(let cartela of cartelasForaDeJogo) {
      const sorteioID = Number(cartela.sorteioID._hex);
      let numsCopy = []
      for (let num of cartela['numeros']) {
        numsCopy.push(Number(num._hex));
      }
      let cartelaCopy = {
        'numeros': numsCopy,
        'premiada': cartela['premiada']
      };
      cartelasCopy.push(cartelaCopy);
      if(typeof this.sorteios[sorteioID] === 'undefined'){
        this.sorteios[sorteioID]=[];
      }
      this.sorteios[sorteioID].push(cartelaCopy);
    }

    this.sorteiosID = Object.keys(this.sorteios);
    // console.log(this.sorteios);
  }

  goToMain() {
    this.router.navigate(['']);
  }
}
