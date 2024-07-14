import { signinInput } from "./types";

export const validateAuthInput = (input: signinInput) => {
  if (input.password === "")
    return { error: true, message: "Password is Required" };
  if (input.username === "")
    return { error: true, message: "Username is Required" };

  return { error: false, message: "OK" };
};
