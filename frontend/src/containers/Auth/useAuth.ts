import { ChangeEvent, useState } from "react";
import { signinInput, signinResponse } from "../../types";
import endpoints from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../routes/appRoutes";
import { validateAuthInput } from "../../utils";

export const useAuth = (type: "signin" | "signup") => {
  const navigate = useNavigate();
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

  const handleSubmit = async () => {
    const uri = type == "signin" ? endpoints.signin : endpoints.signup;
    const { error, message } = validateAuthInput(formData);

    if (error) return alert(message);

    try {
      const { data }: { data: signinResponse } = await axios.post(
        uri,
        formData
      );
      if (!data.success) {
        return alert(data.message);
      }

      if (type == "signup") {
        return navigate(appRoutes.signin);
      }
      const jwt = data.token;
      localStorage.setItem("token", jwt);
      navigate(appRoutes.blogs);
    } catch (err: any) {
      alert(err.response.data.message || "Something went wrong");
    }
  };

  return { handleChange, handleSubmit };
};
