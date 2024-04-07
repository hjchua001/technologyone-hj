@echo off

rem Build and run c# API
cd csharp-api-technologyone-hj
dotnet build
start dotnet run --urls "https://localhost:7244"
cd ..

rem Build and run nextjs in another cmd window without closing
start cmd /K "cd nextjs-webpage-technologyone-hj && npm install && npm run dev"