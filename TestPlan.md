# Test Plan

## Test Objectives
- to ensure user input numbers are converted to text

## Testing Tool
- .http file (introduced in .NET 8.0)

## Test Scope / Acceptance Criteria
|#|Test Case|Expected Result|
|-|-|-|
|1|Input validation|Display proper validation error message|
|2|Negative input validation|Display proper validation error message|
|3|Input more than two decimal places validation|Display proper validation error message|
|4|Input whole number|Converted successfully|
|5|Input decimal only (1 or 2 decimal place)|Converted successfully|
|6|Input zero|Converted successfully|
|7|Input 1-9 figures with and without decimal|Converted successfully|
|8|Input 10 and above figures|Display error message|