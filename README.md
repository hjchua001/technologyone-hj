# TechnologyOne Tech Test - Number to Words Web Page

## Pre-requisites
1. .NET 8.0 SDK
2. NodeJS 18.17 or later
3. Visual Studio 2022 version 17.8 or later with the ASP.NET and web development workload installed (to use .http file)

## How to run the applications
1. Clone the repository
2. Navigate to the folder path
3. Execute start.bat which will build the c# API and NextJS web page
4. Wait for a bit until nextjs is done building, the launched browser should automatically load up once it's ready.
5. Input the values in the web page to test the API
Note: by default it is localhost:3000, if cmd is showing different port number, kindly change browser address

## To test API
1. Launch Visual Studio 2022 (version 17.8 or later)
2. Open an existing solution which was cloned previously
3. Navigate to csharp-api-technologyone-hj folder and locate HJ-Test.sln file
4. Open HJ-Test.http file
5. Send request for each test cases (already hosted as localhost:7244 from previous .bat)


## Reasons for selected appraoch
1. NextJS - fast refresh (instant hot reload without losing component state)
2. NextJS - tailwind css for quick css fix
3. NextJS - can componentize (e.g. input is componentized as TextBox for reusability in the future)
4. C# - Validations in a helper class with static methods, can extend to other of validations for scalability and reusability
5. C# - use stringBuilder instead of string, performs better and more preferable due to recursive
6. C# - use DI (singleton service), all core logics are placed in service layer (Controller -> Service -> Infrastructure (DB, but not used here))
7. C# - recursive method to reduce to loop through each number individually, reducing lengthy and repetitive codes
8. C# - most hardcoded values stored in array of string as static
