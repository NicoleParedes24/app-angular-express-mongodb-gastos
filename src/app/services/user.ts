import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modules/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/users'; // backend

  constructor(private httpclient: HttpClient) {
    console.log('Servicio User funcionando');
  }

  // 🔹 LECTURA DESDE JSON EXTERNO (NO TOCAR)
  obtenerDatos() {
    return this.httpclient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  // 🔹 POST: guardar usuario en MongoDB
  guardarUsuario(user: User) {
    return this.httpclient.post(this.apiUrl, user);
  }

  // 🔹 GET: leer usuarios guardados en MongoDB
  obtenerUsuariosDB() {
    return this.httpclient.get<User[]>(this.apiUrl);
  }
}
