// creo una funzione che mi che crea i quadrati da inserire nella  griglia
function createsquare() {
    let currerentElement = document.createElement('div');
    // assegno all'elemento la classe square
    currerentElement.classList.add('square');
    // restituisco il quadrato contenuto nella variabile
    return currerentElement;
    
}
//qui ora creo un array vuoto in cui andranno i miei numeri che ho generato per le bombe
const contenitoreBombe = [];

// funzione per la creazione delle bombe nel mio gioco 
function bombList (){
    
    //creo il mio ciclo per generare 16 numeri random da andare ad inserire nel mio array
    while(contenitoreBombe.length < 16){
        // qui inserirò la mia operazione matematica per generare numeri random casuali
        let randomNumbers = Math.floor(Math.random() * 100) + 1;
        //creo la mia condizione per far si che dentro al mio array ci siano tutti numeri diversi.
        if(!contenitoreBombe.includes(randomNumbers)){
            contenitoreBombe.push(randomNumbers);
        }
    }
    // richiamo la mia funzione per farla funzionare
    return contenitoreBombe;
} 


// recupero il pulsante dal dom
const btn = document.getElementById('start');
// recupero l'elemento che contiene la mia griglia
const grid = document.getElementById('grid');
// creo il pulsante
btn.addEventListener('click', function(){

    // richiamo la funzione
bombList();
console.log(contenitoreBombe);

    grid.innerHTML = '';
    // creo un ciclo composto da 100 iterazoni per realizzare la mia griglia 10 per 10
 for( let i = 0; i < 100; i++){
     // creo il mio quadrato richiamando la funzione createsquare
     let currerentSquare = createsquare();
 // aggiungo l'evento click al mio quadrato
     currerentSquare.addEventListener('click', function(){
        if(contenitoreBombe.includes(cella)){
            this.classList.add('bg-red');
            grid.style.pointerEvents = 'none';
            alert(`hai perso, il tuo punteggio è `+ punteggio)
        }
        else{
            this.classList.add('clicked');
            risultato();
        }

      this.style.pointerEvents = 'none';
      
      
        
     })
    //  creo una nuova variabile numero 
    let cella = i + 1;
     // gli assegno il numero progressivo
     currerentSquare.innerText = i + 1;
     // appendo il quadrato alla mia griglia
     grid.append(currerentSquare);
 }
 })
//  creo una variabile somma e punteggio
 let somma_punteggi = 0;
 let punteggio = 0;
//  creo una funzione risultato
 function risultato() {
    punteggio += 1;
    console.log(punteggio)
 }