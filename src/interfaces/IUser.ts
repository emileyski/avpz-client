export interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
  birthDate: Date;
  createdAt: Date;
  about: string;
  nickname: string;
  gender: string;
  picture?: string;
}
