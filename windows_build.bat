@echo off
setlocal

:: Define the path to your wails.json file
set "WAILS_JSON_PATH=wails.json"

:: Define the build output directory (adjust if needed)
set "BUILD_DIR=build\bin"

:: Check if wails.json exists
if not exist "%WAILS_JSON_PATH%" (
    echo Error: %WAILS_JSON_PATH% not found.
    goto :eof
)

:: Extract productVersion using findstr and PowerShell (more robust than pure batch for JSON parsing)
for /f "tokens=*" %%a in ('powershell -Command "(Get-Content '%WAILS_JSON_PATH%' | ConvertFrom-Json).info.productVersion"') do (
    set "PRODUCT_VERSION=%%a"
)

:: Check if productVersion was extracted
if not defined PRODUCT_VERSION (
    echo Error: productVersion not found in %WAILS_JSON_PATH%.
    goto :eof
)

:: Extract outputfilename using findstr and PowerShell (more robust than pure batch for JSON parsing)
for /f "tokens=*" %%a in ('powershell -Command "(Get-Content '%WAILS_JSON_PATH%' | ConvertFrom-Json).outputfilename"') do (
    set "OUTPUT_FILENAME=%%a"
)

:: Check if outputfilename was extracted
if not defined OUTPUT_FILENAME (
    echo Error: outputfilename not found in %WAILS_JSON_PATH%.
    goto :eof
)

echo Building Wails application...
wails build

:: Check if build was successful
if %errorlevel% neq 0 (
    echo Error: Wails build failed.
    goto :eof
)

set "EXECUTABLE_PATH=%BUILD_DIR%\%OUTPUT_FILENAME%.exe"
set "NEW_ZIP_PATH=%BUILD_DIR%\%OUTPUT_FILENAME%_v%PRODUCT_VERSION%.zip"

if exist "%NEW_ZIP_PATH%" (
    echo Deleting existing ZIP file: "%NEW_ZIP_PATH%"
    del "%NEW_ZIP_PATH%"
)

set "UPX_PATH=%BUILD_DIR%\upx.exe"

if not exist "%UPX_PATH%" (
    echo Error: UPX executable not found at %UPX_PATH%.
    goto :eof
)

echo Compressing with UPX...
call "%UPX_PATH%" --best "%EXECUTABLE_PATH%"

:: Check if UPX compression was successful
if %errorlevel% neq 0 (
    echo Error: UPX compression failed.
    goto :eof
) else (
    echo Executable compressed with UPX.
)

echo Compressing executable to ZIP...
powershell -Command "Compress-Archive -Path '%EXECUTABLE_PATH%' -DestinationPath '%NEW_ZIP_PATH%' -Force"

:: Check if compression was successful
if %errorlevel% neq 0 (
    echo Error: Failed to compress executable to ZIP.
    goto :eof
) else (
    echo Executable compressed to: %NEW_ZIP_PATH%
)

endlocal
