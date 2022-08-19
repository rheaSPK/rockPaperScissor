const handSign = new Map ([
    ["rock", "rock"],
    ["paper", "paper"],
    ["scissor", "scissor"]])
 
 const resultMap = new Map([["win", "You win"], ["loose", "you loose"], ["tie", "there is a tie"]])

 function getComputerChoice(){
    var handSignArray = Array.from(handSign.values())
    var randomIndex = Math.floor(Math.random() * 3)
    return handSignArray[randomIndex]
 }
 
 function getRoundResult(computerChoice, userChoice){
   console.log(userChoice.toLowerCase())
   console.log(computerChoice)
   switch(userChoice.toLowerCase()){
     case handSign.get("rock"):
       if (computerChoice == handSign.get("rock")){
         return resultMap.get("tie")
       }
       if (computerChoice == handSign.get("paper")){
         return resultMap.get("loose")
       }
       if (computerChoice == handSign.get("scissor")){
         return resultMap.get("win")
       }
       break;
     case handSign.get("paper"):
         if (computerChoice == handSign.get("rock")){
           return resultMap.get("win")
         }
         if (computerChoice == handSign.get("paper")){
           return resultMap.get("tie")
         }
         if (computerChoice == handSign.get("scissor")){
           return resultMap.get("loose")
         }
       break;
      case handSign.get("scissor"):
         if (computerChoice == handSign.get("rock")){
           return resultMap.get("loose")
         }
         if (computerChoice == handSign.get("paper")){
           return resultMap.get("win")
         }
         if (computerChoice == handSign.get("scissor")){
           return resultMap.get("tie")
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