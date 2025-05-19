import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  // Get all articles
  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/articles");
      const data = await response.json();
      setArticles(data.data);
    } catch (error) {
      setError("Der skete en fejl under hentning af artikler.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create article
  const createArticle = async (articleData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/article", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: articleData,
      });

      const result = await response.json();

      if (result.statusCode === 201) {
        toast.success(result.message);
        return result;
      } else {
        toast.error("Der skete en fejl ved oprettelse.");
      }
    } catch (error) {
      console.error(error);
      toast.error(`Fejl: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Update article
  const updateArticle = async (articleData) => {
    try {
      const response = await fetch("http://localhost:3042/article", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: articleData,
      });

      const result = await response.json();

      if (result.statusCode === 200) {
        toast.success(result.message);
      }

      return result;
    } catch (error) {
      console.error(error);
    }
  };

  // Delete article
  const deleteArticle = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3042/article/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      setError("Fejl ved sletning af artikel.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch article by ID
  const fetchArticleById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/article/${id}`);
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Fejl ved hentning af artikel:", error);
    }
  };

  // Refetch function
  const refetchArticles = () => {
    fetchArticles();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles,
    createArticle,
    updateArticle,
    deleteArticle,
    fetchArticleById,
    refetchArticles,
    isLoading,
    error,
  };
};

export { useFetchArticles };
