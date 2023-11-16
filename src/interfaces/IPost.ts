import { ICommonPost } from "./ICommonPost";

export interface IPost extends ICommonPost {
  pictures: string[];
  isLiked?: boolean;
}
