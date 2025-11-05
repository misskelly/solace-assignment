# Development Process Notes

## Initial impressions

-Immediate tasks identified:

- Add TS types for advocate data (this will help pacify the linter)
- Fetch call has no error handling - needs `catch()`
- Accessibility issues
  - Missing key props in .map()
  - Semantic HTML
  - Missing <tr>
- Fix DOM manipulation anti-pattern (getElementById instead of React state)
- Fix search logic bugs:
  - .includes() on numbers (yearsOfExperience)
  - Case-sensitive search
  - No null checks
- Need to break components out of page.tsx
- Case insensitive search

### Backend

- Drizzle has type inference capabilities - we should use them
- It appears as though payload in the schema should be specialties
- migrate.js and `migrate:up` in package.json appears to be redundant
- README is missing a required step in the db setup process, should be added for clarity
