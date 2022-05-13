W celu uruchomienia api należy wykonać następujące działania:
1.Przechodzimy do folderu api ("cd api")
2.Uruchamiany lernę poleceniem "lerna bootstrap"
3.Tworzymy swój plik .env na podstawie pliku .env.example
4.Uruchamiamy api poleceniem "npx run start:dev"

Uruchomienie api wraz z innymi usługami w dokerze:
1.Przechodzimy do głównego folderu projektu.
2.Wpisujemy docker-compose build
3.Następnie docker-compose up