export const BACKEND_URL = "http://localhost:4000/api/";

const endpoints = {
  signup: BACKEND_URL + "auth/signup",
  signin: BACKEND_URL + "auth/signin",
  blogs: BACKEND_URL + "blogs",
  blog: BACKEND_URL + "blogs/blog/",
} as const;

export default endpoints;
