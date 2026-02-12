import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';
import { User } from '../../modules/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent implements OnInit {

  usuarios: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    // 1️⃣ Usuarios del JSON externo
    this.userService.obtenerDatos().subscribe(jsonUsers => {

      // 2️⃣ Usuarios guardados en MongoDB
      this.userService.obtenerUsuariosDB().subscribe(dbUsers => {

        // unir ambos
        this.usuarios = [...jsonUsers, ...dbUsers];
      });
    });
  }
}
