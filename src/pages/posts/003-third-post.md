---
title: 'Git - podstawowe funckje'
date: 2019-10-03 12:30:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code.jpg
tags:
- git
- podstawy
---

Witajcie w tym posicie opisze podstawowe komendy dla git bash'a. Mam nadzieje że się przyda :)

### Niezbędne programy

1. Git bash
2. Visual studio code
3. Fork - przedstawia graficznie histoire całego repozytorium, posiada wiele innych funkcji
4. Bitbucket - podobne do githuba, pozwala tworzyć prywatne darmowe repozytoria, które można udostępniać innym
5. Git kraken - podobne do Fork'a, dostępne na linux'a

### Komendy dotyczące zarządzania plikami oraz folderami
```shell
cd                     'zmiana folderu'
cd ..                  'folder do tyłu'
ls                     'lista plików'
ls -a                  'lista plików razem z ukrytymi'
mkdir                  'tworzy folder'
clear                  'czyszczenie konsoli'
rm                     'usuwanie plików/folderów'
rm -rf                 'usuwanie wszystkich katalogów'
rm -rf folder_name     'usuwanie folderu'
nano plik.txt          'tworzy nowy / otwiera istniejący plik'
nano .gitkeep          'tworzy plik, który pozwala na commita pustego katalogu'
```

### Zmiana configu

```bash
git config --global user.email "email@mail.ci"
git config --global user.name "name"
git config --global core.editor "" 'ustawienie głównego edytora'

```

### Tworzenie commita

```bash
git status                         'sprawdzenie na jakim etapie są pliki w danym repozytorium'
git add /file/                     'dodanie pliku do staging area'
git add -A / git add .             'dodanie wszystkich plików do staging area'
git commit                         'tworzenie commita, powoduje otwarcie pliku textowego w kórym wpisuje się wiadomość commita'
git commit -m "message"            'tworzenie commita, oraz nadanie mu wiadomości'
git commit -m "Initial commit"     'zalecana nazwa dla pierwszego commita'
git commit --amend                 'nadpisanie poprzedniego commita'
```

### Cofanie commit'ów
```bash
git reset HashNumber -              'cofanie się do wybranego commita, usuwając poprzednie'
git reset HashNumber --staged -     'cofanie do staging area'
git reset HashNumber --mixed -      'cofanie do working area - domyślne'
git reset HashNumber --hard -       'Zmiany zostaną usunięte'
git reset HEAD~2 -                  'Cofanie o 2 commity wstecz'
git reset -                         'Resetuje obecną branch na jakiej się znajduje'

```



### Sprawdzanie zmian

```bash
git diff - 'sprawdzanie zmian pomiędzy plikami w repozytorium a working area'
git diff --staged/cached - 'podobne do poprzedniego'
git difftool 'pokazuje zmiany w zewnętrznym edytorze'
git difftool --staged
```

### 

```bash

```
