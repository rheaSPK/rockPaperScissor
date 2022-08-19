//erstelle Objekt das rock paper scissor sein kann
const handSign = new Map([
    [0, "rock"],
    [1, "paper"],
    [2, "scissor"]]);
 
 
 
 const result = ["You win", "you loose", "there is a tie"]
 //erstelle Funktion, die random einer dieser Objekte sein kann
 function getComputerChoice(){
   var randomIndex = Math.floor(Math.random() * 3)
   return handSign.get(randomIndex)
 }
 
 function resultRound(computerChoice, userChoice){
   //paper beats rock
   //rock beats scissor
   //scissor beats paper
   //wenn einer papier hat und der andere rock, nehme rock
   console.log(userChoice.toLowerCase())
   console.log(computerChoice)
   switch(userChoice.toLowerCase()){
     case "rock":
       if (computerChoice == "rock"){
         return result[2]
       }
       if (computerChoice == "paper"){
         return result[1]
       }
       if (computerChoice == "scissor"){
         return result[0]
       }
       break;
     case "paper":
         if (computerChoice == "rock"){
           return result[0]
         }
         if (computerChoice == "paper"){
           return result[2]
         }
         if (computerChoice == "scissor"){
           return result[1]
         }
       break;
      case "scissor":
         if (computerChoice == "rock"){
           return result[1]
         }
         if (computerChoice == "paper"){
           return result[0]
         }
         if (computerChoice == "scissor"){
           return result[2]
         }
        break;
       default:
         return "enter a valid value"
   }
 }
 
 function game(){
   for(let i = 0; i < 5; i++){
     let userChoice = prompt("What do you want to choose")
   }
 }