"use client";

import { useId } from "react";
import { useAdvocates } from "../hooks/useAdvocates";
import { AdvocateCard } from "./AdvocateCard";

export const Advocates = () => {
  const { advocates, loading, error, searchTerm, onSearchChange, reset } =
    useAdvocates();

  const inputId = useId();

  return (
    <>
      <header className="my-6">
        <h1
          id="advocates-heading"
          className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight"
        >
          Find Your Perfect{" "}
          <span className="text-solace-gold" aria-hidden>
            Advocate
          </span>
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Search our network by name, city, degree, specialty or years of
          experience.
        </p>
      </header>
      <main>
        <section className="mb-6">
          <label htmlFor={inputId} className="sr-only">
            Search advocates
          </label>

          <div className="flex gap-3 items-start">
            <input
              id={inputId}
              role="searchbox"
              type="search"
              value={searchTerm}
              onChange={onSearchChange}
              placeholder="Search advocates by name, city, specialty..."
              aria-describedby="results-count"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm"
            />

            <button
              type="button"
              onClick={reset}
              className="px-3 py-2 rounded-md bg-solace-gold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pink-500"
              aria-label="Reset search"
            >
              Reset
            </button>
          </div>

          <div
            id="results-count"
            role="status"
            aria-live="polite"
            className="mt-2 text-sm text-gray-700"
          >
            {loading ? (
              <span>Loading advocates…</span>
            ) : error ? (
              <span className="text-red-700">Error: {error}</span>
            ) : (
              <span>
                {advocates.length} result
                {advocates.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advocates.map((advocate, index) => (
            <AdvocateCard
              key={`${advocate.firstName}-${advocate.lastName}-${index}`}
              advocate={advocate}
              index={index}
            />
          ))}
        </div>
      </main>
    </>
  );
};
