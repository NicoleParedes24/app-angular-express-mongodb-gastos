import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';
import { GastoService, Gasto } from '../../services/gasto';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte.html',
  styleUrls: ['./reporte.css']
})
export class Reporte implements OnInit {

  gastos: Gasto[] = [];
  usuarios: any[] = [];

  constructor(
    private gastoService: GastoService,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {

  // 🔹 GASTOS
  this.gastoService.obtenerGastos().subscribe(data => {
  this.gastos = data;
});


  // 🔹 USUARIOS (NO TOCAR)
  this.userService.obtenerDatos().subscribe((data: any[]) => {
    this.usuarios = data;
  });
}

}
