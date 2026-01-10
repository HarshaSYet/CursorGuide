# Add Statistical Calculator Functions

## Overview

Extend the calculator with basic statistical functions: `average` (mean), `max`, `min`, and `sum`. These functions will operate on arrays of numbers, following the existing clean code patterns in [calculator.ts](calculator.ts).

## Implementation Details

### 1. Add Statistical Functions to `calculator.ts`

Add four new exported functions:

- **`sum(numbers: number[]): number`** - Calculate the sum of all numbers in an array
- **`average(numbers: number[]): number`** - Calculate the mean (average) of numbers in an array
- **`max(numbers: number[]): number`** - Find the maximum value in an array
- **`min(numbers: number[]): number`** - Find the minimum value in an array

**Error Handling:**

- All functions should throw an error if the input array is empty
- Follow the existing pattern used in `divide` function (throw Error with descriptive message)

**Code Style:**

- Keep functions simple and focused (single responsibility)
- Use explicit return types
- Follow existing naming conventions (camelCase)

### 2. Update `main.ts` to Demonstrate New Functions

Add example usage of the new statistical functions:

- Create a sample array of numbers
- Call each statistical function and log the results
- Include error handling for edge cases (empty array)

## Files to Modify

- [calculator.ts](calculator.ts) - Add 4 new statistical functions
- [main.ts](main.ts) - Add demonstration code for the new functions

## Implementation Notes

- Functions will accept `number[]` as input (arrays of numbers)
- Maintain consistency with existing function signatures (clear parameter names, explicit types)
- Use early returns or guard clauses for error handling

## Todos

- [ ] Add sum, average, max, and min functions to calculator.ts with proper error handling for empty arrays
- [ ] Update main.ts to demonstrate the new statistical functions with example usage
