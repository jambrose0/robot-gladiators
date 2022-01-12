var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble",]
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);
// console.log(enemyNames[0]);
// console.log(enemyNames[3]);


var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        //ask player if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player chooses to skip
    if (promptFight === "skip" || promptFight === 'SKIP')  {
        //confirm skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    //remove enemy health by player attack
    enemyHealth = enemyHealth - playerAttack;
                   console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
                
                   //check enemy health
                   if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
//award player money for winning
                    playerMoney = playerMoney + 20;
//leave while loop for winning
                    break;
                   } else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                //player damage
                playerHealth = playerHealth - enemyAttack;
                console.log (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."); 
             
                //check player's health
                if (playerHealth <= 0) {
                    window.alert(playerName + ' has died!');
                    break;
                }    else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
              }
            }; 
           
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to the Robot Gladiators! Round " + ( i + 1 ));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        // debugger;
        fight(pickedEnemyName);
    //might have to move below out of function to standalone
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      //shop message
        var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');
       //yes to shopping
       if (storeConfirm) {
            shop();
        }
}
        
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
     }
     }
    //  startGame();
     endGame();
}

var endGame = function() {
   if (playerHealth > 0) {
       window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
   }
   else {
       window.alert("You've lost your robot in battle.");
   }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    // window.alert("The game has now ended. Let's see how you did!");

}
var shop = function() {
var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice.");
switch(shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
       if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        
        //increase health and lower money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
       }
       else {
        window.alert("You don't have enough money!");
    }
        break;

        case "UPGRADE": //new case
        case "upgrade":
      if (playerMoney >= 7) { window.alert("Upgrading player's atack by 6 for 7 dollars.");

        //up attack, lower money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
          window.alert("You don't have enough money!");
      }
    break;
    case "LEAVE": //new case
    case "leave":
    window.alert("Leaving store.");
    //no action, leave store
    break;
    default:
        window.alert("You did not pick a valid option. Try again");
        //recall shop
        shop();
        break;
}
};

startGame();
