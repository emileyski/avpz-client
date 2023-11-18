import { IComment } from "./IComment";
import { IUserSimplified } from "./IUserSimplified";

export interface ICommonPost {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  comments?: IComment[];
  user?: IUserSimplified;
  likeCount?: number;
  commentCount?: number;
}
