Remove-Item -path ".\dist" -include * -recurse
Copy-Item -Path ".\src\web" -exclude "*asset-manifest.json" -Destination ".\dist\web" -Recurse -Force
npm run build