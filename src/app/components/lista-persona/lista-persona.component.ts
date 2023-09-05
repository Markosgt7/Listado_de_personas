import { Component } from '@angular/core';
import { Persona } from 'src/app/persona.model';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent {
  personas: Persona[]= [
    new Persona('Mario','Dardón'),
    new Persona ('Pedro','Perez'),
    new Persona('José','Matías')
  ];
  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }
}
