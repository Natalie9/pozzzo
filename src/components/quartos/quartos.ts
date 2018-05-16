import { Component, AnimationKeyframe } from '@angular/core';

/**
 * Generated class for the QuartosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quartos',
  templateUrl: 'quartos.html'
})
export class QuartosComponent {

  acomodacao: any;

  constructor() {
    this.acomodacao={
      name:"Quarto 107",
        disp: true  
    }
    
  }

}
