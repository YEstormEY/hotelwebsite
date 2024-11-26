## Test

### Stap 1: Functionele Test

#### Testdoelen
1. Controleren of alle hotels correct worden ingeladen uit de JSON-file.
2. Verifiëren dat het juiste hotel wordt weergegeven op de detailpagina wanneer erop wordt geklikt of via de URL wordt genavigeerd.
3. Verifiëren dat de hotelinformatie op de detailpagina overeenkomt met de gegevens in de JSON-file.
4. Controleren of de beschikbaarheid van de kamers correct wordt weergegeven.


#### Teststappen
1. **Controleren van de arraylengte**:
    - Laad de pagina en controleer of de JSON-file correct wordt ingeladen door het aantal hotels in de lijst te tellen.
    - Verwacht resultaat: De lijst met hotels is niet leeg en bevat het verwachte aantal items.

2. **Controleren van de geladen hotelinformatie**:
    - Klik op een hotel en controleer of de naam en andere informatie (adres, beschikbaarheid, etc.) overeenkomen met de gegevens uit de JSON-file.
    - Navigeer naar een hotel met de id en controleer of alle informatie correct wordt weergegeven.
    - Verwacht resultaat: De weergegeven informatie komt volledig overeen met de gegevens in de JSON-file.

3. **Controleren van de beschikbaarheid van de kamers**:
   - Controleer of de beschikbaarheid/prijs van de kamers correct wordt weergeven op de detailpagina.
   - Verwacht resultaat: De beschikbaarheid en prijs van de kamers komen overeen met de gegevens in de JSON-file.

---

### Stap 2: Visuele Test

#### Testdoelen
1. Controleren of de website correct wordt weergegeven op verschillende schermformaten en apparaten.
2. Verifiëren dat de website consistent is in stijl.
3. Controleren of alle elementen correct werken en er goed uitzien.

#### Teststappen
1. **Responsiveness testen**:
   - Open de website op verschillende schermformaten en controleer of de layout en inhoud correct worden weergegeven.
   - Verwacht resultaat: De website past zich aan aan verschillende schermformaten en blijft bruikbaar.

2. **Consistentie controleren**:
   - Controleer of de stijl en vormgeving van de website consistent zijn op alle pagina's.
   - Verwacht resultaat: De website heeft een consistente stijl en vormgeving.

3. **Functionaliteit testen**:
   - Controleer of alle interactieve elementen (knoppen) correct werken.
   - Verwacht resultaat: Alle interactieve elementen werken zoals verwacht en er zijn geen fouten.

---

| Testnummer | Testcategorie        | Beschrijving                                            | Verwacht resultaat                                           | Resultaat       |
|------------|----------------------|--------------------------------------------------------|--------------------------------------------------------------|-----------------|
| 1          | Functionele Test     | Controleren of hotels correct worden ingeladen         | Hotels worden correct ingeladen                              | Geslaagd        |
| 2          | Functionele Test     | Controleren of juiste hotelinformatie wordt weergegeven | Hotelinformatie komt overeen met gegevens in JSON file       | Geslaagd        |
| 3          | Functionele Test     | Controleren van beschikbaarheid en prijzen van kamers  | Beschikbaarheid en prijzen zijn correct                      | Geslaagd        |
| 4          | Visuele Test         | Testen van responsiveness op verschillende apparaten   | Layout past zich correct aan op verschillende schermformaten | Geslaagd        |
| 5          | Visuele Test         | Consistentie controleren van stijl en vormgeving       | Stijl en vormgeving zijn consistent                          | Geslaagd        |
| 6          | Visuele Test         | Controleren van functionaliteit van interactieve elementen | Interactieve elementen werken zoals verwacht                 | Geslaagd        |
