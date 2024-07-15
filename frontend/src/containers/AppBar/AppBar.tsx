import { Avatar } from "../../components/Avatar";

export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <div className="flex flex-col justify-center text-2xl font-semibold">
        Medium
      </div>
      <div>
        <Avatar size="medium" name="Sachin Barupal" />
      </div>
    </div>
  );
};
