export type signinInput = {
  username: string;
  password: string;
};
export type createBlogInput = {
  title: string;
  content: string;
};
export type updateBlogInput = {
  id: number;
  title?: string;
  content?: string;
};

export type signinResponse = {
  success: boolean;
  message: string;
  token: string;
};
