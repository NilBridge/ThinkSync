chcp 65001

if exist tmp (
    rd tmp /s
)


md tmp
md "tmp/ThinkSync"

xcopy src "tmp/ThinkSync" /s /e /exclude:%cd%\pack.config
xcopy package.json "tmp/ThinkSync/" /F

cd 7z

7za.exe a ../tmp/ThinkSync.zip ../tmp/ThinkSync/*

cd ../tmp

REN ThinkSync.zip ThinkSync.llplugin