import { Input } from "../../components/Input";
import { useAuth } from "./useAuth";
import { Button } from "../../components/Button";
import { AuthHeader } from "../../components/AuthHeader";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const { handleChange, handleSubmit } = useAuth(type);

  return (
    <div className=" h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <AuthHeader type={type} />

          <div>
            <Input
              label="Username"
              field="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <Input
              label="Password"
              field="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <Button
            onClick={handleSubmit}
            text={type == "signin" ? "Sign In" : "Sign Up"}
          />
        </div>
      </div>
    </div>
  );
};
