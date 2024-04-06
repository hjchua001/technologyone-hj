@echo off

rem Build and run c# API
cd csharp-api-technologyone-hj
dotnet build
start dotnet run --urls "https://localhost:7244"
cd ..

rem Build and run Next.js web page
cd nextjs-webpage-technologyone-hj
npm install next
npm run dev
cd ..
