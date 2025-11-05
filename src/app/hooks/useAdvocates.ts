import { Advocate } from "@/db/types";
import { useEffect, useState, type ChangeEvent } from "react";

export type ApiResponse = {
  data: Advocate[];
};

const matchesSearchTerm = (advocate: Advocate, searchTerm: string): boolean => {
  const term = searchTerm.toLowerCase();

  const searchableFields = [
    advocate.firstName,
    advocate.lastName,
    advocate.city,
    advocate.degree,
    advocate.yearsOfExperience.toString(),
    ...(advocate.specialties || []),
  ];

  const matches = searchableFields.some((field) => {
    if (typeof field !== "string") {
      console.warn("Non-string field found:", field);
      return false;
    }
    return field.toLowerCase().includes(term);
  });

  return matches;
};

export const useAdvocates = () => {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        const response = await fetch("/api/advocates");
        if (!response.ok) {
          throw new Error(`Failed to fetch advocates: ${response.statusText}`);
        }

        const json = (await response.json()) as ApiResponse;

        setAdvocates(json.data);
        setFilteredAdvocates(json.data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to load advocates";
        setError(message);
        console.error("Error fetching advocates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvocates();
  }, []);

  const applyFilter = (term: string) => {
    const trimmedTerm = term.trim();

    if (!trimmedTerm) {
      setFilteredAdvocates(advocates);
      return;
    }

    const filtered = advocates.filter((advocate) =>
      matchesSearchTerm(advocate, trimmedTerm)
    );

    setFilteredAdvocates(filtered);
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    applyFilter(term);
  };

  const reset = () => {
    setSearchTerm("");
    setFilteredAdvocates(advocates);
  };

  return {
    advocates,
    filteredAdvocates,
    loading,
    error,
    searchTerm,
    onSearchChange,
    reset,
  } as const;
};
