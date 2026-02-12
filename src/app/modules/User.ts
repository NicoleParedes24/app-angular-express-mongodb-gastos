export interface User {
  _id?: string;      // 👈 MongoDB
  id?: number;       // 👈 JSON externo (opcional)
  name: string;
  username: string;
  email: string;
}
