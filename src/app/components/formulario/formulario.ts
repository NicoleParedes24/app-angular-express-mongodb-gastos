import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GastoService, Gasto } from '../../services/gasto';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario {

  ruc: string = '';
  valor: number = 0;
  tipo: string = '';

  rucValido: boolean = true;   // 👈 estado de validación

  constructor(private gastoService: GastoService) {}

  // 🔹 VALIDAR RUC ECUATORIANO
  validarRuc(ruc: string): boolean {

    // debe tener 13 dígitos
    if (!/^\d{13}$/.test(ruc)) return false;

    const provincia = parseInt(ruc.substring(0, 2), 10);
    if (provincia < 1 || provincia > 24) return false;

    const tercerDigito = parseInt(ruc[2], 10);
    if (tercerDigito >= 6) return false;

    const coeficientes = [2,1,2,1,2,1,2,1,2];
    let suma = 0;

    for (let i = 0; i < 9; i++) {
      let valor = parseInt(ruc[i], 10) * coeficientes[i];
      if (valor >= 10) valor -= 9;
      suma += valor;
    }

    const digitoVerificador = (10 - (suma % 10)) % 10;

    return digitoVerificador === parseInt(ruc[9], 10);
  }

  // 🔹 Se ejecuta cuando escribes el RUC
  onRucChange() {
    this.rucValido = this.validarRuc(this.ruc);
  }

  agregar() {

    if (!this.rucValido) {
      alert('RUC inválido');
      return;
    }

    const nuevoGasto: Gasto = {
      tipo: this.tipo,
      ruc: this.ruc,
      valor: this.valor
    };

    this.gastoService.crearGasto(nuevoGasto).subscribe({
      next: () => {
        alert('Gasto guardado correctamente');
        this.ruc = '';
        this.valor = 0;
        this.tipo = '';
        this.rucValido = true;
      },
      error: err => console.error(err)
    });
  }
}
