import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structure-flower',
  templateUrl: './structure-flower.component.html',
  styleUrls: ['./structure-flower.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class StructureFlowerComponent {
  items = ['🌷', '🌹', '🌻', '🌼', '🌸', '💐','🌷', '🌹', '🌻', '🌼', '🌸', '💐'];
  eliminarElemento(index: number) {
    this.items.splice(index, 1);
  }

}
