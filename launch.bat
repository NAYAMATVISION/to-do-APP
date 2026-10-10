@echo off
echo ========================================================
echo  Launching Komorebi Workspace
echo ========================================================
start http://localhost:8080/index.html
python -m http.server 8080 || npx -y serve -p 8080 .
pause
