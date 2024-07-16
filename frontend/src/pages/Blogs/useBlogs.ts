import axios from "axios";
import { useEffect, useState } from "react";
import endpoints from "../../config";
import { blogItem, BlogsApiResponse } from "../../types";

export const useBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<blogItem[]>([]);
  const token = localStorage.getItem("token");
  const fetchBlogs = async () => {
    try {
      const { data }: { data: BlogsApiResponse } = await axios.get(
        endpoints.blogs,
        { headers: { Authorization: token } }
      );
      setBlogs(data.blogs);
      setIsLoading(false);
    } catch (err: any) {
      alert(err.response.data.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    isLoading,
    blogs,
  };
};
