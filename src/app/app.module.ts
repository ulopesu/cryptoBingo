import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [AppComponent, MainComponent, HistoricoComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, MatCardModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
