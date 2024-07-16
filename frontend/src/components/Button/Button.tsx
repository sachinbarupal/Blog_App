interface Props {
  text: string;
  onClick: () => void;
  varient?: "auth" | "create";
}

export const Button = ({ text, onClick, varient = "auth" }: Props) => {
  if (varient === "auth")
    return (
      <button
        type="button"
        onClick={onClick}
        className=" mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        {text}
      </button>
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {text}
    </button>
  );
};
