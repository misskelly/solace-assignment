"use client";

import { useId } from "react";
import { useAdvocates } from "../hooks/useAdvocates";

export const Advocates = () => {
  const {
    filteredAdvocates,
    loading,
    error,
    searchTerm,
    onSearchChange,
    reset,
  } = useAdvocates();

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
                {filteredAdvocates.length} result
                {filteredAdvocates.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </section>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Degree</th>
              <th>Specialties</th>
              <th>Years of Experience</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdvocates.map((advocate, index) => {
              return (
                <tr key={`${advocate.firstName}-${advocate.lastName}-${index}`}>
                  <td>{advocate.firstName}</td>
                  <td>{advocate.lastName}</td>
                  <td>{advocate.city}</td>
                  <td>{advocate.degree}</td>
                  <td>
                    {advocate.specialties.map((s: string) => (
                      <div key={s}>{s}</div>
                    ))}
                  </td>
                  <td>{advocate.yearsOfExperience}</td>
                  <td>{advocate.phoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};
