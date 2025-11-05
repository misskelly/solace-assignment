"use client";

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

  const onClick = () => {
    reset();
  };

  return (
    <>
      <h1>Solace Advocates</h1>
      {loading && <p>Loading advocates…</p>}
      {error && <p className="text-red-700">Error: {error}</p>}
      <div>
        <p>Search</p>
        <p>
          Searching for: <span>{searchTerm}</span>
        </p>
        <input
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search advocates...."
        />
        <button onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
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
    </>
  );
};
