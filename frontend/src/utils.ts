import { createBlogBody, signinInput } from "./types";

export const validateAuthInput = (input: signinInput) => {
  if (input.password === "")
    return { error: true, message: "Password is Required" };
  if (input.username === "")
    return { error: true, message: "Username is Required" };

  return { error: false, message: "OK" };
};

export const validateCreateBlogInput = (input: createBlogBody) => {
  if (input.title === "") return { error: true, message: "Title is Required" };
  if (input.content === "")
    return { error: true, message: "Content is Required" };

  return { error: false, message: "OK" };
};
