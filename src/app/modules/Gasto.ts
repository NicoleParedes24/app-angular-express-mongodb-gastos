export interface Gasto {
  _id?: string;   // 👈 MongoDB (opcional para crear)
  tipo: string;
  ruc: string;
  valor: number;
}
