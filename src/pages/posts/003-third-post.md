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
git reset HashNumber               'cofanie się do wybranego commita, usuwając poprzednie'
git reset HashNumber --staged      'cofanie do staging area'
git reset HashNumber --mixed       'cofanie do working area - domyślne'
git reset HashNumber --hard        'Zmiany zostaną usunięte'
git reset HEAD~2                   'Cofanie o 2 commity wstecz'
git reset                          'Resetuje obecną branch na jakiej się znajduje'
```

### Sprawdzanie zmian

```bash
git diff                           'sprawdzanie zmian pomiędzy plikami w repozytorium a working area'
git diff --staged/cached           'podobne do poprzedniego'
git difftool                       'pokazuje zmiany w zewnętrznym edytorze'
git difftool --staged
```

### Sprawdzanie historii repozytorium

```bash
git log                            'wyświetla historię commitów w repozytorium'
git log --oneline                  'podobne do poprzedniego, wyświetla mniej informacji'
git log --oneline --graph          'podobne do porzedniego, z graficznym wyglądem'
git log -1(number)                 'wyświetla historie z ilością commitów'
git log grep="file name"           'historia commitów dla pliku'
```
### Poruszanie się po repozytorium
```bash
git checkout 5746392ec8268bfe73b73a504f6babcab881a0e4 'wchodzenie w stan z danego commita'
git checkout master                'powrót do głównego commita - master' 
git checkout BRANCH_NAME           'zmiana poziomu edytowalności na BRANCH_NAME'
git checkout -b BRANCH_NAME        'Tworzenie nowej branchy i przenoszenie się na nią'

```

### Tworzenie branch'y
```bash
git branch BRANCH_NAME -           'dodanie nowej branchy do repozytoriu'
git branch                         'zwraca listę branchy w repozytorium' 
git checkout -b BRANCH_NAME        'Tworzenie nowej branchy i przenoszenie się na nią'
```

### Łączenie commitów
```bash
git merge BRANCH_NAME              "merge'owanie - łączenie dwóch branch'y - w tej której sie znajduejmy oraz BRANCH_NAME"
git merge BRANCH_NAME --no-ff      "no fast forward - łączenie dwóch branch'y, tylko tworzy osobny commit a nie przenosi Branch'y"
```

### Klonowanie repozytorium
```bash
git clone REPOSITORY_URL            'Klonowanie repozytorium z internetu na komputer'
git clone REPOSITORY_URL FOLDER_NAME'Klonowanie repozytorium oraz tworzy nowy folder'
git clone REPOSITORY_URL .          'Klonowanie repozytorium do folderu na kótry git aktualnie wskazuje'
git remote
git remote -v                       'sprawdzenie na jakim serwerze jest dane repozytoriu'
git remote add origin REPOSITORY_URL'dodaje repository z serwera do folderu na który git wskazuje'
```

### Przesyłanie repozytorium na serwer
```bash
git push origin BRANCH_NAME         'przesłanie reposytorium na serwer gita'
git push --set-upstream origin BRANCH_NAME "zapamiętanie nazwy branch'y, później wystarczy wpisac git push"
git push -u origin BRANCH_NAME      "zapamiętanie nazwy branch'y, później wystarczy wpisac git push"
git push -f -                       'UWAŻAĆ NA NADPISANIE - f (force) - nadpisanie zmian na serwerze - pozbycie się niechcianych edycji serwera'
```

### Pobieranie repozytorium na komputer
```bash
git fetch                          'pobieranie aktualnego repozytorium na komputer bez przenoszenia HEAD na origin BRANCH_NAME - trzeba użyć merge'
git pull                           'pobieranie aktualnego repozytoriu na komputer przenosi HEAD na origin BRANCH_NAME - nie trzeba używac merge'
git pull -f                        'UWAŻAĆ NA NADPISANIE - f (force) - nadpisując zmiany na komputerze - - pobieranie aktualnego repozytoriu na komputer przenosi HEAD na origin BRANCH_NAME - nie trzeba używac merge'
git config --global credential.helper "cache --timeout=3600" - 'dodanie do configu komendy która sprawi ze git bedzie pamiętac przez 3600 sekund dane logowania'
git fetch                          'pobieranie aktualnego repozytorium na komputer bez przenoszenia HEAD na origin BRANCH_NAME - trzeba użyć merge'
git pull                           'pobieranie aktualnego repozytoriu na komputer przenosi HEAD na origin BRANCH_NAME - nie trzeba używac merge'
git pull -f                        'UWAŻAĆ NA NADPISANIE - f (force) - nadpisując zmiany na komputerze - - pobieranie aktualnego repozytoriu na komputer przenosi HEAD na origin BRANCH_NAME - nie trzeba używac merge'
git config --global credential.helper "cache --timeout=3600" - 'dodanie do configu komendy która sprawi ze git bedzie pamiętac przez 3600 sekund dane logowania'
```

### Ignorowanie plików
```bash
git checkout                       'master przenosimy się na branch master jeżeli na niej nie jesteśmy'
                                   'Wybieramy plik do ignorowania - IGNORE_FILE'
nano .gitignore                    'tworzymy plik .gitignore'
                                   'dodajemy do tego pliku IGNORE_FILE'
git add .gitignore
git commit -m ".gitignore added config.txt" 'tworzymy commita'
                                   'Warto sprawdzić gitignore generator -- google gitignore.io'
```