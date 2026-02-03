// ==UserScript==
// @name          EVO - Bottone Marcatempo Virtuale (HOME)
// @namespace     https://unibo.it/
// @version       1.4
// @description   Aggiunge il bottone "TeleLavoro" per il Marcatempo Virtuale accanto al titolo "Timbrature di giornata" nella Home
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// @run-at        document-end
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Inietta CSS per nascondere il testo dei bottoni su mobile (solo icona)
     */
    function injectButtonCSS() {
        if (document.getElementById('evo-btn-mobile-css')) return;

        const style = document.createElement('style');
        style.id = 'evo-btn-mobile-css';
        style.innerHTML = `
            /* Desktop: tutto visibile */
            .evo-btn-label-telelavoro,
            .evo-btn-label-timb-mancanti {
                display: inline;
            }

            /* Mobile: solo icona, testo nascosto */
            @media (max-width: 1024px) and (orientation: portrait),
                   (max-width: 768px),
                   (hover: none) and (pointer: coarse) {
                .evo-btn-label-telelavoro,
                .evo-btn-label-timb-mancanti {
                    display: none !important;
                }

                #TeleLavoroMarcatempoBtn,
                #TimbMacantiBtn {
                    padding: 0.4rem 0.6rem !important;
                }

                #TeleLavoroMarcatempoBtn .material-symbols-outlined,
                #TimbMacantiBtn .material-symbols-outlined {
                    font-size: 1.6rem !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    function addTeleLavoroButton() {
        // Trova il titolo "Timbrature di giornata"
        const h4Elements = document.querySelectorAll('h4');
        let clockingsTitle = null;

        for (const h4 of h4Elements) {
            if (h4.textContent.includes('Timbrature di giornata')) {
                clockingsTitle = h4;
                break;
            }
        }

        if (!clockingsTitle) {
            console.log('Titolo "Timbrature di giornata" non trovato');
            return;
        }

        // Verifica che il bottone non sia già stato aggiunto
        if (clockingsTitle.querySelector('#TeleLavoroMarcatempoBtn')) {
            console.log('Bottone già presente');
            return;
        }

        // Crea il form nascosto necessario per il submit
        const form = document.createElement('form');
        form.name = 'OnlineClockingRequestList';
        form.method = 'POST';
        form.action = '/jt-employee-portal/richiesteTimbratureVirtualiElenco.do';
        form.style.display = 'inline-block';
        form.style.marginLeft = '10px';

        // Recupera i dati dal form Dashboard esistente
        const dashboardForm = document.querySelector('form[name="Dashboard"]');
        if (!dashboardForm) {
            console.log('Form Dashboard non trovato');
            return;
        }

        // Copia i campi hidden necessari
        const fieldsToClone = ['jwtToken', 'theme', 'matricola', 'fullname', 'selectedRuolo', 'roleDescr'];
        fieldsToClone.forEach(fieldName => {
            const originalField = dashboardForm.querySelector(`input[name="${fieldName}"]`);
            if (originalField) {
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = fieldName;
                hiddenInput.value = originalField.value;
                form.appendChild(hiddenInput);
            }
        });

        // Aggiungi i campi specifici per il marcatempo
        const originInput = document.createElement('input');
        originInput.type = 'hidden';
        originInput.name = 'origin';
        originInput.value = 'dashboard.do';
        form.appendChild(originInput);

        // Crea il bottone "TeleLavoro"
        const button = document.createElement('button');
        button.id = 'TeleLavoroMarcatempoBtn';
        button.type = 'submit';
        button.className = 'bottone bottone-plus';
        button.name = 'event_Create';
        button.value = 'TeleLavoro';
        button.setAttribute('data-bs-toggle', 'tooltip');
        button.setAttribute('data-bs-custom-class', 'custom-tooltip');
        button.setAttribute('data-bs-title', 'TeleLavoro Marcatempo');
        button.style.padding = '0.4rem 0.8rem';
        button.style.fontSize = '0.9rem';
        button.style.marginLeft = '0.5rem';

        // Aggiungi l'icona e il testo
        button.innerHTML = `
            <i class="material-symbols-outlined align-middle" style="font-size: 1.2rem;">add</i>
            <i class="material-symbols-outlined align-middle" style="font-size: 1.2rem;">home_work</i>
            <span class="evo-btn-label-telelavoro">&nbsp;TeleLavoro</span>
        `;

        form.appendChild(button);

        // Modifica il titolo per includere il bottone
        // Trasforma l'h4 in un flex container
        clockingsTitle.style.display = 'flex';
        clockingsTitle.style.alignItems = 'center';
        clockingsTitle.style.justifyContent = 'space-between';
        clockingsTitle.style.width = '100%';

        // Wrappa il contenuto esistente in uno span
        const titleContent = clockingsTitle.innerHTML;
        clockingsTitle.innerHTML = '';
        
        const titleSpan = document.createElement('span');
        titleSpan.innerHTML = titleContent;
        clockingsTitle.appendChild(titleSpan);

        // Aggiungi il form con il bottone
        clockingsTitle.appendChild(form);

        console.log('Bottone "TeleLavoro" aggiunto con successo');

        // Inizializza il tooltip di Bootstrap se disponibile
        if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
            new bootstrap.Tooltip(button);
        }
    }

    // Aspetta che la pagina sia completamente caricata
    const waitForPageElements = setInterval(() => {
        // Verifica che siamo sulla pagina Dashboard/Home
        const isDashboardPage = document.querySelector('form[name="Dashboard"]') !== null;
        const clockingsCard = document.querySelector('.card h4');
        const isClockingsCard = clockingsCard && clockingsCard.textContent.includes('Timbrature di giornata');
        
        if (isDashboardPage && isClockingsCard) {
            clearInterval(waitForPageElements);
            injectButtonCSS();
            addTeleLavoroButton();
            console.log('Script Bottone Marcatempo Virtuale caricato');
        }
    }, 500);

    // Timeout di sicurezza dopo 10 secondi
    setTimeout(() => {
        clearInterval(waitForPageElements);
    }, 10000);

})();
