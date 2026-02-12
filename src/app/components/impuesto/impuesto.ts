import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-impuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './impuesto.html',
  styleUrls: ['./impuesto.css']
})
export class Impuesto {

  // Datos personales
  cedula: string = '';
  sueldo: number = 0;

  // Gastos personales
  alimentacion: number = 0;
  vivienda: number = 0;
  educacion: number = 0;
  vestimenta: number = 0;
  salud: number = 0;

  // Resultados
  totalGastosDeducibles: number = 0;
  baseImponible: number = 0;
  excedente: number = 0;
  impuestoRenta: number = 0;

  resultados: any[] = [];

  // Límites SRI
  LIMITE_GENERAL = 3809.65;
  LIMITE_SALUD = 15238.60;
  LIMITE_TOTAL = 15238.60;

  // Tabla Impuesto a la Renta 2023
  tablaImpuesto = [
    { fraccion: 0, exceso: 11722, impuestoBase: 0, porcentaje: 0 },
    { fraccion: 11722, exceso: 14930, impuestoBase: 0, porcentaje: 5 },
    { fraccion: 14930, exceso: 19385, impuestoBase: 160, porcentaje: 10 },
    { fraccion: 19385, exceso: 25638, impuestoBase: 606, porcentaje: 12 },
    { fraccion: 25638, exceso: 33738, impuestoBase: 1356, porcentaje: 15 },
    { fraccion: 33738, exceso: 44721, impuestoBase: 2571, porcentaje: 20 },
    { fraccion: 44721, exceso: 59537, impuestoBase: 4768, porcentaje: 25 },
    { fraccion: 59537, exceso: 79388, impuestoBase: 8472, porcentaje: 30 },
    { fraccion: 79388, exceso: 105580, impuestoBase: 14427, porcentaje: 35 },
    { fraccion: 105580, exceso: Infinity, impuestoBase: 23594, porcentaje: 37 }
  ];

  // 🔹 TOTAL DE GASTOS EN TIEMPO REAL
  get totalGastosActual(): number {
    return (
      this.alimentacion +
      this.vivienda +
      this.educacion +
      this.vestimenta +
      this.salud
    );
  }

  // 🔹 ACTUALIZAR SUELDO
  actualizarSueldo(valor: number) {
    this.sueldo = Number(valor) || 0;
  }

  // 🔹 ACTUALIZAR GASTOS
  actualizarGasto(campo: string, valor: number) {
    const v = Number(valor) || 0;

    switch (campo) {
      case 'alimentacion': this.alimentacion = v; break;
      case 'vivienda': this.vivienda = v; break;
      case 'educacion': this.educacion = v; break;
      case 'vestimenta': this.vestimenta = v; break;
      case 'salud': this.salud = v; break;
    }
  }

  // 🔹 CALCULAR IMPUESTO
  calcularImpuesto() {

    const totalGastos = this.totalGastosActual;

    // ❌ VALIDACIÓN CLAVE
    if (this.sueldo > 0 && totalGastos > this.sueldo) {
      alert('❌ Los gastos superan el sueldo anual. No se puede calcular el impuesto.');
      return;
    }

    // ===== CÁLCULO NORMAL =====
    const alim = Math.min(this.alimentacion, this.LIMITE_GENERAL);
    const vivi = Math.min(this.vivienda, this.LIMITE_GENERAL);
    const edu  = Math.min(this.educacion, this.LIMITE_GENERAL);
    const vest = Math.min(this.vestimenta, this.LIMITE_GENERAL);
    const salu = Math.min(this.salud, this.LIMITE_SALUD);

    this.totalGastosDeducibles = alim + vivi + edu + vest + salu;

    if (this.totalGastosDeducibles > this.LIMITE_TOTAL) {
      this.totalGastosDeducibles = this.LIMITE_TOTAL;
    }

    this.baseImponible = this.sueldo - this.totalGastosDeducibles;

    const tramo = this.tablaImpuesto.find(t =>
      this.baseImponible >= t.fraccion && this.baseImponible <= t.exceso
    );

    if (!tramo) return;

    this.excedente = this.baseImponible - tramo.fraccion;
    this.impuestoRenta =
      tramo.impuestoBase +
      (this.excedente * tramo.porcentaje) / 100;

    this.resultados.push({
      cedula: this.cedula,
      sueldo: this.sueldo,
      totalGastosDeducibles: this.totalGastosDeducibles,
      baseImponible: this.baseImponible,
      impuestoRenta: this.impuestoRenta
    });
  }
}
