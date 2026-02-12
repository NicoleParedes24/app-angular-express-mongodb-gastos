import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Gasto {
  _id?: string;     // MongoDB ObjectId
  tipo: string;
  ruc: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  // 👇 API del backend (Express + MongoDB)
  private apiUrl = 'http://localhost:3000/api/gastos';

  constructor(private http: HttpClient) {}

  // 🔹 GET: obtener todos los gastos
  obtenerGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.apiUrl);
  }

  // 🔹 GET: obtener un gasto por ID
  obtenerGastoPorId(id: string): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.apiUrl}/${id}`);
  }

  // 🔹 POST: crear nuevo gasto
  crearGasto(gasto: Gasto): Observable<any> {
    return this.http.post(this.apiUrl, gasto);
  }

  // 🔹 PUT: actualizar gasto
  actualizarGasto(id: string, gasto: Gasto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, gasto);
  }

  // 🔹 DELETE: eliminar gasto
  eliminarGasto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
