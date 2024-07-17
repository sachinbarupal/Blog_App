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

export type blogItem = {
  id: number;
  title: string;
  content: string;
  author: {
    username: string;
  };
};

export type BlogsApiResponse = {
  blogs: blogItem[];
  message: string;
  success: boolean;
};

export type BlogApiResponse = {
  blog: blogItem;
  message: string;
  success: boolean;
};

export type createBlogBody = {
  title: string;
  content: string;
};
