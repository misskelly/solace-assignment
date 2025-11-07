## DISCUSSION.md

### Development Process

I approached this assignment in two phases. Initially, I focused on fixing bugs, improving accessibility, and modernizing the UI—which took approximately 2 hours. After re-reading the requirements, I realized I hadn't adequately addressed the "hundreds of thousands of advocates" scale requirement, so I added a follow-up PR implementing server-side search and pagination infrastructure.

### What I Built

**Phase 1: Core Improvements (~2 hours)**

- Refactored the page into reusable components (`AdvocateCard`, `Advocates`, and a custom `useAdvocates` hook)
- Redesigned the UI from a table to a card-based grid layout with better visual hierarchy
- Added comprehensive accessibility features (ARIA labels, semantic HTML, keyboard navigation, screen reader support)
- Implemented phone number formatting utility
- Fixed type safety issues throughout the codebase
- Added proper error handling for API requests
- Created an "Expert Advocate" badge for advocates with 8+ years of experience
- Updated branding with custom Tailwind colors and typography

**Phase 2: Performance for Scale (~45 minutes)**

- Moved search filtering from client to server using PostgreSQL queries
- Added pagination infrastructure (20 records per page, offset-based)
- Implemented debounced search to reduce API calls
- Fixed data consistency issues (phone number types)

### What I Would Do With More Time

#### 1. Complete Pagination UI (30 minutes)

Currently the API supports pagination but there's no user-facing controls. I would add a `Load More` button or infinite scroll.

#### 2. Database Optimization (20 minutes)

Add indexes to dramatically improve search performance.

#### 3. Advanced Search Features (45 minutes)

- **Filtering**: Dropdown filters for degree type, years of experience ranges, and specialties
- **Sorting**: Allow users to sort by experience, name, or location
- **Search highlighting**: Highlight matched terms in results

#### 4. UX Enhancements (45 minutes)

- Loading skeleton states instead of just "Loading advocates..."
- Empty state with illustration when no results found
- Recent searches / suggested searches
- Advocate detail modal on card click
- Smooth animations for card appearance and filtering
- "Scroll to top" button when results are long

#### 6. Testing (60 minutes)

- Unit tests for search utility functions
- Integration tests for API endpoints with various search scenarios
- E2E tests for search flow
- Performance testing with large datasets (simulate 100k+ records)
- Accessibility testing with screen readers

#### 7. Additional Features

- Save favorite advocates
- Share advocate profiles via URL
- Compare multiple advocates side-by-side
- Availability calendar integration

### Lessons Learned

Looking back, I’d approach the 2-hour limit a little differently.

**What I did:** I spent most of my time building a clean, accessible, production-quality UI, something I’m proud of, but it meant I didn’t leave enough space to fully address the scaling challenge.

**What I’d do next time:** 1. Fix the critical bugs first (about 20 min) 2. Implement server-side search and pagination (45 min) 3. Add lightweight UI and UX improvements (30 min) 4. Wrap up with polish and documentation (25 min)

The prompt emphasized both design and performance, and I leaned hard into design. In hindsight, I could have shown my eye for UX with smaller, faster wins and spent more of the window proving scalability.

It’s a good reminder that even when a challenge invites creativity, the best results come from balancing aesthetics with the problem’s core constraints, especially when the clock is running.
