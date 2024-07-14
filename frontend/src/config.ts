export const BACKEND_URL = "http://localhost:4000/api/";

const endpoints = {
  signup: BACKEND_URL + "auth/signup",
  signin: BACKEND_URL + "auth/signin",
  blog: BACKEND_URL + "blog",
} as const;

export default endpoints;
