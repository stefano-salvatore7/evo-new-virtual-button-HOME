# EVO - Bottone Marcatempo Virtuale (HOME)

Questo script Tampermonkey/Greasemonkey è progettato per il sistema di gestione delle presenze EVO (usato su `https://personale-unibo.hrgpi.it/`). Aggiunge un bottone **"Nuovo"** accanto al titolo **"Timbrature di giornata"** nella pagina HOME/Dashboard, permettendo di accedere rapidamente alla creazione di una nuova richiesta di Marcatempo Virtuale senza dover navigare attraverso il menu laterale.

**(Versione Script: 1.0)**

## Caratteristiche

* **Accesso Rapido al Marcatempo Virtuale:**
    * Aggiunge un bottone **"Nuovo"** direttamente nella pagina HOME, accanto al titolo "Timbrature di giornata".
    * Elimina la necessità di cliccare sulla sidebar → "Le mie presenze" → "Marcatempo virtuale" → bottone "Nuovo".
    * **Un solo click** per accedere alla pagina di creazione di una nuova timbratura virtuale.
* **Design Integrato:**
    * Il bottone utilizza lo **stesso stile** dei bottoni nativi del portale EVO (classe `bottone bottone-plus`).
    * Include l'**icona Material "add"** seguita dal testo "Nuovo".
    * Dimensioni e spaziature ottimizzate per integrarsi perfettamente con l'interfaccia esistente.
    * Tooltip "Nuovo Marcatempo" al passaggio del mouse.
* **Posizionamento Intuitivo:**
    * Il bottone appare sulla **destra del titolo** "Timbrature di giornata".
    * Il titolo e il bottone sono allineati orizzontalmente con layout flex.
    * Visibile immediatamente accanto alle timbrature del giorno corrente.
* **Funzionamento Nativo:**
    * Crea un form nascosto con tutti i parametri necessari (jwtToken, matricola, ruolo, ecc.).
    * Copia automaticamente i dati dal form Dashboard esistente.
    * Effettua il submit corretto verso la pagina del Marcatempo Virtuale.
    * Si comporta esattamente come il bottone "Nuovo" originale presente nella pagina dedicata.
* **Compatibilità con la Dashboard HOME:**
    * Lo script funziona esclusivamente sulla **pagina Dashboard/Home** del portale EVO.
    * Si attiva automaticamente quando rileva la presenza della card "Timbrature di giornata".
    * Non interferisce con altre pagine del portale.
* **Prevenzione Duplicati:**
    * Controlla che il bottone non venga aggiunto più volte.
    * Gestisce correttamente il caricamento asincrono della pagina.
    * Timeout di sicurezza per evitare loop infiniti.
* **Supporto Tooltip Bootstrap:**
    * Inizializza automaticamente il tooltip di Bootstrap se disponibile.
    * Mostra "Nuovo Marcatempo" al passaggio del mouse sul bottone.

## Installazione

Per installare lo script e assicurarti che si aggiorni automaticamente dal repository GitHub, segui i passaggi per il tuo dispositivo:

## Installazione su Smartphone Android

Per utilizzare questo script su smartphone, è necessario installare Firefox per Android e Tampermonkey. Ecco la procedura completa:

### 1. Installa Firefox per Android

Se non l'hai già installato:

* Apri il **Google Play Store**
* Cerca **"Firefox Browser"**
* Installa l'app ufficiale di Mozilla Firefox

### 2. Abilita le Estensioni su Firefox Android

Firefox per Android supporta le estensioni, ma devi prima abilitarle:

1. Apri **Firefox** sul tuo smartphone
2. Tocca il menu (tre puntini in basso a destra)
3. Vai in **"Impostazioni"**
4. Scorri fino in fondo e tocca **"Informazioni su Firefox"**
5. **Tocca ripetutamente (5 volte) sul logo di Firefox** che appare nella pagina
6. Vedrai comparire un messaggio che conferma l'attivazione della modalità debug
7. Torna indietro alle Impostazioni
8. Ora vedrai apparire una nuova voce **"Componenti aggiuntivi"** nel menu
9. Tocca **"Componenti aggiuntivi"**
10. Tocca **"Gestione componenti aggiuntivi"**

### 3. Installa Tampermonkey

1. Nella sezione "Gestione componenti aggiuntivi" che hai appena aperto
2. Cerca **"Tampermonkey"** nella barra di ricerca
3. Tocca su **Tampermonkey** nei risultati
4. Tocca **"+ Aggiungi"** per installarlo
5. Conferma l'installazione toccando **"Aggiungi"** nel popup

### 4. Installazione dello Script per Aggiornamenti Automatici

Ora puoi installare lo script:

[**Clicca qui per installare/aggiornare EVO - Bottone Marcatempo Virtuale (HOME)**](https://github.com/stefano-salvatore7/evo-new-virtual-button-HOME/raw/refs/heads/main/new-virtual-home.user.js)

* Dopo aver cliccato sul link dal tuo smartphone Firefox, Tampermonkey ti mostrerà il codice dello script e ti chiederà di **"Installa"** (se è la prima volta) o **"Aggiorna"** (se stai aggiornando una versione precedente). Conferma l'azione toccando il pulsante **"Installa"**.

### 5. Verifica Aggiornamenti Automatici

Una volta installato tramite il link RAW, Tampermonkey dovrebbe gestire automaticamente gli aggiornamenti:

* Tocca l'icona di Tampermonkey nella barra degli strumenti di Firefox
* Seleziona **"Dashboard"**
* Trova "EVO - Bottone Marcatempo Virtuale (HOME)" nell'elenco
* Verifica che la casella "Controlla aggiornamenti" sia spuntata
* Tampermonkey controllerà periodicamente il repository per nuove versioni

## Installazione su PC

Per installare lo script su desktop/laptop, segui questi passaggi:

### 1. Installare l'estensione [Tampermonkey](https://www.tampermonkey.net/)

Se non l'hai già fatto, installa l'estensione Tampermonkey nel tuo browser:

* **[Tampermonkey per Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**
* **[Tampermonkey per Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)**
* **[Tampermonkey per Firefox](https://addons.mozilla.org/it/firefox/addon/tampermonkey/)** (o Greasemonkey se preferisci)

### 2. Configurazione del Browser (Importante per l'esecuzione)

Per consentire l'esecuzione corretta dello script, potrebbero essere necessari alcuni passaggi di configurazione nel tuo browser:

#### Per Google Chrome:

1.  Apri Chrome e digita `chrome://extensions/` nella barra degli indirizzi, poi premi Invio.
2.  In alto a destra, attiva la **"Modalità sviluppatore"** (interruttore).
3.  Individua Tampermonkey nell'elenco delle estensioni.
4.  Clicca su **"Dettagli"** sotto Tampermonkey.
5.  Assicurati che l'opzione **"Consenti script utente"** sia attiva.
6.  Assicurati che l'opzione **"Consenti l'accesso agli URL del file"** sia attiva.

#### Per Microsoft Edge:

1.  Apri Edge e digita `edge://extensions/` nella barra degli indirizzi, poi premi Invio.
2.  In alto a destra, attiva la **"Modalità sviluppatore"** (interruttore). Potrebbe comparire un avviso di sicurezza nella parte superiore del browser; è normale quando si usa questa modalità.
3.  Individua Tampermonkey nell'elenco delle estensioni.
4.  Clicca su **"Dettagli"** sotto Tampermonkey.
5.  Assicurati che l'opzione **"Consenti estensioni da altri archivi"** sia attiva.
6.  **Assicurati che l'opzione "Consenti l'accesso agli URL del file" sia attiva.**

### 3. Installazione dello Script per Aggiornamenti Automatici (PC)

Ora che il tuo browser è configurato, puoi installare lo script:

[**Clicca qui per installare/aggiornare EVO - Bottone Marcatempo Virtuale (HOME)**](https://github.com/stefano-salvatore7/evo-new-virtual-button-HOME/raw/refs/heads/main/new-virtual-home.user.js)

* Dopo aver cliccato, Tampermonkey (o Greasemonkey) ti mostrerà il codice dello script e ti chiederà di **"Installa"** (se è la prima volta) o **"Aggiorna"** (se stai aggiornando una versione precedente). Conferma l'azione.

### 4. Verifica Aggiornamenti Automatici (Tampermonkey - PC)

Una volta installato tramite il link RAW, Tampermonkey dovrebbe gestire automaticamente gli aggiornamenti. Puoi verificare le impostazioni:

* Clicca sull'icona di Tampermonkey nel tuo browser e seleziona **"Dashboard"**.
* Trova "EVO - Bottone Marcatempo Virtuale (HOME)" nell'elenco.
* Verifica che la casella "Controlla aggiornamenti" sia spuntata. L'URL di aggiornamento dovrebbe essere corretto (quello RAW che hai usato per l'installazione).
* Tampermonkey controllerà periodicamente il repository per nuove versioni e ti notificherà se è disponibile un aggiornamento. Puoi anche forzare un controllo cliccando sull'icona delle frecce circolari (Aggiorna) accanto al nome dello script.

## Utilizzo

Una volta installato, lo script si attiverà automaticamente quando visiterai la pagina Dashboard/Home di EVO su `https://personale-unibo.hrgpi.it/*`.

1.  Naviga alla **pagina Dashboard/Home** (quella con la card "Timbrature di giornata").
2.  Vedrai apparire un bottone **"Nuovo"** sulla destra del titolo "Timbrature di giornata".
3.  **Clicca sul bottone "Nuovo"** per accedere rapidamente alla pagina di creazione di una nuova richiesta di Marcatempo Virtuale.
4.  Verrai reindirizzato alla pagina dove potrai:
    * Selezionare il verso (Entrata/Uscita)
    * Scegliere il tipo di timbratura (es: Telelavoro)
    * Specificare eventuali causali
    * Inviare la richiesta

## Vantaggi

* ⚡ **Risparmio di tempo**: accesso diretto senza navigare nel menu
* 🎯 **Intuitivo**: il bottone è posizionato esattamente dove serve
* 🎨 **Design nativo**: si integra perfettamente con lo stile del portale
* 🔒 **Sicuro**: utilizza gli stessi parametri e meccanismi del portale originale
* 📱 **Compatibile**: funziona su tutti i browser supportati da Tampermonkey

## Casi d'Uso

Questo script è particolarmente utile per chi:

* Lavora frequentemente in **telelavoro** e deve timbrare virtualmente
* Ha bisogno di registrare **timbrature mancanti** rapidamente
* Vuole evitare la navigazione ripetitiva attraverso il menu laterale
* Preferisce un accesso diretto alle funzioni più utilizzate

## Compatibilità Script

Questo script è stato testato e funziona perfettamente insieme a:

* **[EVO Exit Time Calculator (HOME)](https://github.com/stefano-salvatore7/evo-exit-time-calc-home)** - v2.1 o superiore
* **[EVO Responsive Sidebar (HOME)](https://github.com/stefano-salvatore7/evo-responsive-sidebar-HOME)** - v2.3 o superiore

Gli script sono completamente indipendenti e non entrano in conflitto tra loro.

## Contributi

Se desideri contribuire a migliorare questo script, sentiti libero di aprire una "Issue" o proporre una "Pull Request" sul repository GitHub.

## Log delle Versioni

### Versione 1.0 (Gennaio 2026)
* Release iniziale
* Aggiunto bottone "Nuovo" accanto a "Timbrature di giornata"
* Form automatico con tutti i parametri necessari
* Design integrato con stile nativo del portale
* Tooltip "Nuovo Marcatempo"
* Prevenzione duplicati
* Compatibilità verificata con altri script EVO

---

**Nota:** Questo script è progettato per funzionare sulla pagina HOME/Dashboard. Non modifica il comportamento della pagina "Marcatempo virtuale" dedicata, ma fornisce solo un accesso rapido ad essa.

**Link Utili:**
* [Repository GitHub](https://github.com/stefano-salvatore7/evo-new-virtual-button-HOME)
* [Segnala un problema](https://github.com/stefano-salvatore7/evo-new-virtual-button-HOME/issues)
* [Portale EVO UniBo](https://personale-unibo.hrgpi.it/)
