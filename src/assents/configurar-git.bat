@echo off
git config user.name "Yashin-yas"
git config user.email "murilotkawano@gmail.com"
echo Git configurado com sucesso!
pause

Para criar pela primeira vez
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/Yashin-yas/app-meu-bolso
git push -u origin main

Para atualizar o projeto
git init
git add .
git commit -m "Primeiro commit"
git push -u origin main