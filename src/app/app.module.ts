import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPersonaComponent } from './components/lista-persona/lista-persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FormularioComponent, ListaPersonaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
