import { useEffect, useState } from "react";
import { BlogApiResponse, blogItem } from "../../types";
import axios from "axios";
import endpoints from "../../config";

export const useBlog = (id: string) => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<blogItem>();
  const fetchBlog = async () => {
    try {
      const { data }: { data: BlogApiResponse } = await axios.get(
        endpoints.blog + id,
        { headers: { Authorization: token } }
      );
      setBlog(data.blog);
      setIsLoading(false);
    } catch (err: any) {
      alert(err.response.data.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return { isLoading, blog };
};
