import { Auth } from "../../containers/Auth";
import { Quote } from "../../containers/Quote";

export function Signin() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
}
