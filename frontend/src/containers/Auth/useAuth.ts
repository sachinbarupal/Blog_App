import { ChangeEvent, useState } from "react";
import { signinInput } from "../../types";

export const useAuth = () => {
  const [formData, setFormData] = useState<signinInput>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData((c) => ({
      ...c,
      [field]: e.target.value,
    }));
  };

  return { handleChange };
};
