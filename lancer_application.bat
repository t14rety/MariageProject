@echo off
title Devis Mariage - Lanceur
node launcher.js
if %errorlevel% neq 0 (
  echo.
  echo Erreur: Impossible de demarrer l'application. 
  echo Veuillez vous assurer que Node.js est correctement installe.
  echo.
  pause
)
