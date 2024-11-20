
const headButton = document.getElementById("Head");
const tailButton = document.getElementById("Tail");
const attemptSpan = document.getElementById("attempt");
const scoreSpan = document.getElementById("Score");


let attempts = 0;
let score = 0;


function tossCoin(){
  return Math.random() < 0.5 ? "Head" : "Tail";
}




function handleGuess(userGuess) {
   const result = tossCoin();
   attempts++;
   if (userGuess === result) {
       score++;
       alert(`Correct! It was ${result}.`);
   } else {
       alert(`Wrong! It was ${result}.`);
   }


   attemptSpan.textContent = attempts;
   scoreSpan.textContent = score;
};




headButton.addEventListener("click", function () {
   handleGuess("Head");
});
tailButton.addEventListener("click", function () {
   handleGuess("Tail");
});
