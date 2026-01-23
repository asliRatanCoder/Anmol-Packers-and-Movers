@echo off
REM Quick Launch Script for Anmol Packers and Movers Website
REM Run this file to open different pages in your browser

echo ========================================
echo  Anmol Packers and Movers Website
echo  Quick Launch Menu
echo ========================================
echo.
echo 1. Open Homepage (index.html)
echo 2. Open About Page
echo 3. Open Services Page
echo 4. Open Gallery Page
echo 5. Open Contact Page
echo 6. Open Quick Start Guide
echo 7. Open All Pages
echo 8. Exit
echo.
set /p choice="Enter your choice (1-8): "

if "%choice%"=="1" start "" "index.html"
if "%choice%"=="2" start "" "about.html"
if "%choice%"=="3" start "" "services.html"
if "%choice%"=="4" start "" "gallery.html"
if "%choice%"=="5" start "" "contact.html"
if "%choice%"=="6" start "" "start.html"
if "%choice%"=="7" (
    start "" "index.html"
    timeout /t 1 /nobreak >nul
    start "" "about.html"
    timeout /t 1 /nobreak >nul
    start "" "services.html"
    timeout /t 1 /nobreak >nul
    start "" "gallery.html"
    timeout /t 1 /nobreak >nul
    start "" "contact.html"
)
if "%choice%"=="8" exit

echo.
echo Page opened in your default browser!
echo.
pause
