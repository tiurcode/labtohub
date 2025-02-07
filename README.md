

# GitLab repo GitHubiin

Tämä tiedosto neuvoo kuinka tuoda GitLabista repositorio GitHubiin

## Phue-valojen ohjaus
Esimerkki repona käytetään Phue-valojen ohjausjärjestelmän skriptin sisältävän repon kloonaaminen GitLabista GitHubiin.

## Kloonaus terminaalissa (GitBash)
```bash
# luo kansio paikalliselle koneelle
mkdir <kansio>
# siirry kansioon
cd <kansio>
# kloonataan GitLab-repo ilman commit-historiaa 
git clone --depth 1 gitlab.com/kayttajanimi/reponimi.git
# siirrytään kloonattuun kansioon
cd <reponimi>
# poistetaan vanha Git-historia
rm -rf .git
# alustetaan uusi Git-repo
git init
git add .
git commit -m "Labista Hubiin"
```

## GitHub repo

Mene GitHubiin ja luo uusi tyhjä repo. Kopioi sen SSH-osoite.

## Lisätään etärepositorioksi GitHub-repo
 ```bash
 git remote add origin https://github.com/kayttajanimi/reponimi.git
# pushataan koodi Githubiin
git push -u origin main
 ```
