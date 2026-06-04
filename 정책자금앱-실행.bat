@echo off
chcp 65001 >/dev/null
cd /d "%~dp0"
echo ============================================
echo   경남 정책자금 안내 앱 실행 중...
echo ============================================
echo.
echo 잠시 후 크롬이 자동으로 열립니다.
echo 이 검은 창은 닫지 마세요 (서버 실행 중)
echo.
start "" /min "C:\Program Files\nodejs\node.exe" "정책자금-서버.js"
timeout /t 2 /nobreak >/dev/null
start chrome "http://localhost:3001"
echo 앱이 실행되었습니다!
echo 종료하려면 이 창을 닫으세요.
echo.
pause >/dev/null
