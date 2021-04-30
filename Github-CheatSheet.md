### Github

    1. Maak een nieuw project
    2. git init
    3. Maak een .gitignore bestand aan
    4. voeg /.idea. & node_modules toe 
    5. Maak een index.html aan
    6. git status
    7. git add .
    8. git commit -m "my first message"
    9. git status
    10. pas index.html aan
    11. git status
    12. git add .
    13. git commit -m " tweede commit"
    14. nieuwe repository (GitHub).
    15. koppel je lokale repo met de remote repo.--> git remote add origin HIER_DE_LINK
    16. git push origin master (of main)
    17. ga naar de browser (checken)

### Checken wat de remote is / wijzigen remote URL
    - git remote-v
    - veranderen:  git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
    - git remove-v (checken)

### Clonen huiswerk
    1. VCS in webstorm
    2. git remote remove origin
    3. git remote add origin https://github.com/Maarten86M/css-grid-18-03-2021.git ( eigen link hier)
    4. git push origin master

### Feature branche
    1. Maak nieuwe branche git checkout -b naam-van-branche feature/uitwerking-maarten)
    2. Maak je huiswerk
    3. git status
    4. git add .
    5. git commit -m "tekst"
    6. git push origin naam-van-branche

### pull request maken
    1. groene knop github
    2. deel link (uit browserbalk https://github.com/Maarten86M/fake-huiswerk-opdracht/pull/1)

### Feedback ontvangen 
    1. pas lokaal dingen aan op feature branch. 
    2. Maak hier een commit van en push opnieuw de hele branche git push origin naam-van-branche

### Mergen 
    1. Klik op de groene merge knop. 

### Lokaal up to date 
    1. git checkout master 
    2. git pull origin master
    3. git branch -d naam-branch

### Github Pages.
    1. Ga naar settings en scroll door naar Github Pages 
    2. Klik hier aan welke Branche je hiervoor wilt gebruiken. , save
    3. Dan klik je aan welke map Root of Docs. (Nu voor Root gekozen) , save
    4. Je site staat online. 
