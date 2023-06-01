# Carosello Mono Array

## STEPS

1. Prendi tutti gli elementi dal DOM
2. Creiamo una lista di immagini
3. Impostiamo index per visualizzare la prima immagine
4. Mostriamo la prima immagine
5. Aggiungiamo un eventlistener (Pre button)

   - Nascondiamo l'immagine
   - Controlliamo se siamo sulla prima immagine

     **Se** siamo nella prima immagine

     - Impostiamo index dull'ultimo elemento

     **Altrimenti** decrementiamo index di uno

   - Mostriamo l'immagine all'index corrente

6. Aggiungiamo un eventlistener (Next button)

   - Nascondiamo l'immagine
   - Controlliamo se siamo sull' ultima immagine

     **Se** siamo nell' ultima immagine

     - Impostiamo index al primo elemento

     **Altrimenti** incrementiamo index di uno

   - Mostriamo l'immagine all'index corrente

---

## BONUS

Bonus 1:

Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

Bonus 2:

Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
