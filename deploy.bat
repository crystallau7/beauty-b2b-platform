@echo off
echo ========================================
echo 全球美妆B2B平台 - GitHub部署脚本
echo ========================================
echo.

echo 正在检查Git状态...
git status

echo.
echo 请选择操作：
echo 1. 更新现有仓库
echo 2. 创建新仓库
echo 3. 查看文件列表
echo 4. 退出
echo.

set /p choice="请输入选择 (1-4): "

if "%choice%"=="1" goto update_repo
if "%choice%"=="2" goto create_repo
if "%choice%"=="3" goto list_files
if "%choice%"=="4" goto exit
goto invalid_choice

:update_repo
echo.
echo 正在更新现有仓库...
git add .
git commit -m "Update website: add Korean Hot Products and Clearance sections, set English as default language"
git push origin main
echo 更新完成！
pause
goto exit

:create_repo
echo.
echo 请按照以下步骤创建新仓库：
echo 1. 在GitHub上创建新仓库
echo 2. 复制仓库地址
echo 3. 运行以下命令：
echo    git clone [仓库地址]
echo    copy * [仓库目录]
echo    cd [仓库目录]
echo    git add .
echo    git commit -m "Initial commit: Global Beauty B2B Platform"
echo    git push origin main
echo.
pause
goto exit

:list_files
echo.
echo 当前目录文件列表：
dir
echo.
pause
goto exit

:invalid_choice
echo 无效选择，请重新运行脚本
pause
goto exit

:exit
echo 脚本执行完成
pause



