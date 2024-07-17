import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import endpoints from "../../config";
import { createBlogBody } from "../../types";
import { validateCreateBlogInput } from "../../utils";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../routes/appRoutes";

export const usePublish = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [formData, setFormData] = useState<createBlogBody>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData((c) => ({ ...c, [field]: e.target.value }));
  };

  const publishBlog = async () => {
    try {
      const { error, message } = validateCreateBlogInput(formData);

      if (error) return alert(message);

      const { data } = await axios.post(endpoints.blog, formData, {
        headers: { Authorization: token },
      });
      if (!data.success) return alert(data.message);

      setIsLoading(false);
      setFormData({
        title: "",
        content: "",
      });
      navigate(`/blog/${data.id}`);
    } catch (err: any) {
      setIsLoading(false);
      alert(err.response.data.message || "Something went wrong");
    }
  };

  return {
    formData,
    isLoading,
    publishBlog,
    handleChange,
  };
};
