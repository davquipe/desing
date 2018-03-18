import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  mostrar:boolean = false;

  frase:any={
    mensaje: "mensaje de hola mundo ..........",
    autor: "david"
  }

  personajes:string[] = ["Batma","SuperMan","Flash"]
}
