import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion.html',
  styleUrls: ['./informacion.css']
})
export class Informacion implements OnInit {

  gastos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.gastos = [
      {
        nombre: 'Vivienda',
        detalle: 'Gastos relacionados con alquiler, luz, agua e internet.',
        imagen: '../vivienda.jpg'
      },
      {
        nombre: 'Salud',
        detalle: 'Gastos médicos, medicinas y consultas.',
        imagen: '../salud.jpg'
      },
      {
        nombre: 'Educación',
        detalle: 'Pagos de estudios, cursos y materiales.',
        imagen: '../educacion.jpg'
      }
    ];
  }

  mensaje(gasto: any): void {
  alert('Esto es ' + gasto.nombre);
}


  mensaje1(gasto: any): void {
    alert('Detalle: ' + gasto.detalle);
  }

  borrarDeducible(gasto: string) {
    for (let i = 0; i < this.gastos.length; i++) {
      if (gasto == this.gastos[i]) {
        this.gastos.splice(i, 1);
      }
    }
  }

  
}
