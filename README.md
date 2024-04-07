# TechnologyOne Tech Test - Number to Words Web Page

## Pre-requisites
1. .NET 8.0 SDK
2. NodeJS 18.17 or later
3. Visual Studio 2022 version 17.8 or later with the ASP.NET and web development workload installed (to use .http file)

## How to run the applications
1. Clone the repository
2. Navigate to the folder path
3. Execute start.bat which will build the c# API and NextJS web page
4. Open browser and set address to http://localhost:3000 (by default it's 3000, can refer the to cmd for port number)
5. Input the values in the web page to test the API

## To test API
1. Launch Visual Studio 2022 (version 17.8 or later)
2. Open an existing solution which was cloned previously
3. Navigate to csharp-api-technologyone-hj folder and locate HJ-Test.sln file
4. Open HJ-Test.http file
5. Send request for each test cases (already hosted as localhost:7244 from previous .bat)