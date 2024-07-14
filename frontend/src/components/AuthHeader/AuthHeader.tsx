import { Link } from "react-router-dom";
import appRoutes from "../../routes/appRoutes";

interface Prop {
  type: "signin" | "signup";
}

export const AuthHeader = ({ type }: Prop) => {
  return (
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
  );
};
