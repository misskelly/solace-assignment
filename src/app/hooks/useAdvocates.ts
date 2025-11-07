import { Advocate } from "@/db/types";
import { useEffect, useState, type ChangeEvent } from "react";

export type ApiResponse = {
  data: Advocate[];
};

export const useAdvocates = () => {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAdvocates(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchAdvocates = async (query: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ q: query, offset: "0" });
      const response = await fetch(`/api/advocates?${params}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const json = await response.json();
      setAdvocates(json.data);
      setHasMore(json.hasMore);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const reset = () => {
    setSearchTerm("");
  };

  return {
    advocates,
    loading,
    error,
    searchTerm,
    onSearchChange,
    reset,
  } as const;
};
