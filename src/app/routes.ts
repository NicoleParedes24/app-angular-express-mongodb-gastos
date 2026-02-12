import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Informacion } from './components/informacion/informacion';
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte';
import { Impuesto } from './components/impuesto/impuesto';
import { UserComponent } from './components/user/user';

export const rutas: Routes = [
  { path: '', component: Menu },
  { path: 'menu', component: Menu },
  { path: 'informacion', component: Informacion },
  { path: 'formulario', component: Formulario },
  { path: 'reporte', component: Reporte },
  { path: 'impuesto', component: Impuesto },
  { path: 'user', component: UserComponent }
];
