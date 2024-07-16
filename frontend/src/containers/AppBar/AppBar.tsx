import { Link } from "react-router-dom";
import { Avatar } from "../../components/Avatar";
import appRoutes from "../../routes/appRoutes";
import { Button } from "../../components/Button";

export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <div className="flex flex-col justify-center text-2xl font-semibold cursor-pointer">
        <Link to={appRoutes.blogs}>Medium</Link>
      </div>
      <div>
        <Link to={appRoutes.publish}>
          <Button text="Create Blog" onClick={() => {}} varient="create" />
        </Link>
        <Avatar size="medium" name="Sachin Barupal" />
      </div>
    </div>
  );
};
