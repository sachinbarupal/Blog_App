import { ChangeEvent } from "react";

interface Props {
  label?: string;
  field: string;
  placeholder?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, field: string) => void;
}
export const Input = ({
  label,
  field,
  placeholder = "",
  type = "text",
  onChange,
}: Props) => {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-semibold text-black pt-4">
          {label}
        </label>
      )}
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={(e) => onChange(e, field)}
      />
    </div>
  );
};
