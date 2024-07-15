interface Props {
  name: string;
  size?: "small" | "medium";
}
export const Avatar = ({ name, size = "small" }: Props) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={` text-gray-600 dark:text-gray-300 ${
          size === "small" ? "text-xs font-thin" : "text-base"
        }`}
      >
        {name.toUpperCase()[0]}
      </span>
    </div>
  );
};
