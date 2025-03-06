import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';// Importa tu módulo de rutas
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    // AppComponent,
    //DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Asegúrate de importar AppRoutingModule para habilitar el enrutamiento
    AppComponent,
    DashboardComponent,
    routing
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
