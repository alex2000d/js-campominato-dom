// creo una funzione che mi che crea i quadrati da inserire nella  griglia
function createsquare() {
    let currerentElement = document.createElement('div');
    // assegno all'elemento la classe square
    currerentElement.classList.add('square');
    // restituisco il quadrato contenuto nella variabile
    return currerentElement;
    
}
// recupero il pulsante dal dom
const btn = document.getElementById('start');
// recupero l'elemento che contiene la mia griglia
const grid = document.getElementById('grid');
// creo il pulsante
btn.addEventListener('click', function(){

    grid.innerHTML = '';
    // creo un ciclo composto da 100 iterazoni per realizzare la mia griglia 10 per 10
 for( let i = 0; i < 100; i++){
     // creo il mio quadrato richiamando la funzione createsquare
     let currerentSquare = createsquare();
 // aggiungo l'evento click al mio quadrato
     currerentSquare.addEventListener('click', function(){
      this.classList.add('clicked');
      console.log(this.innerText);

        
     })
     // gli assegno il numero progressivo
     currerentSquare.innerText = i + 1;
     // appendo il quadrato alla mia griglia
     grid.append(currerentSquare);
 }
 })