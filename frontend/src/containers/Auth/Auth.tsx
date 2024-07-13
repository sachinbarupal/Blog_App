import { Link } from "react-router-dom";
import appRoutes from "../../routes/appRoutes";
import { Input } from "../../components/Input";
import { ChangeEvent, useState } from "react";
import { signinInput } from "../../types";
import { useAuth } from "./useAuth";
import { Button } from "../../components/Button";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const { handleChange } = useAuth();

  return (
    <div className=" h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <div className=" px-10 ">
            <div className="text-3xl font-bold ">Create An Account</div>
            <div className="text-slate-500">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                to={type === "signin" ? appRoutes.signup : appRoutes.signin}
                className=" pl-2 underline"
              >
                {type === "signup" ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>

          <div>
            <Input
              label="Username"
              field="username"
              placeholder="Username"
              onChange={handleChange}
              required={true}
            />
            <Input
              label="Password"
              field="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required={true}
            />
          </div>
          <Button
            onClick={() => {}}
            text={type == "signin" ? "Sign In" : "Sign Up"}
          />
        </div>
      </div>
    </div>
  );
};
