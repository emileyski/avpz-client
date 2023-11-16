import { IUserSimplified } from "./IUserSimplified";

export interface IComment {
  id: string;
  body: string;
  createdAt: Date;
  user: IUserSimplified;
}
