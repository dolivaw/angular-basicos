import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroreBorrado: string = '';

  borrarHeroe(): void {
    this.heroreBorrado = this.heroes.shift() || '';
  }
}
