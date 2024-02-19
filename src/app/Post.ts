export interface Post {
  id?: number;
  title: string;
  description: string;
  image: string;
  comments?: [{ comment: string; user: string }];
}
