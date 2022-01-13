// random number function
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min +1) + min) +40;

    return value;
};
//name setting function
var getPlayerName = function() {
    window.prompt("What is your robot's name?")
    var name = "";
    while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
console.log("Your robot's name is " + name);
return name;
}
}
//player stats
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
//enemy stats
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];
//fight or skip function
var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toLowerCase();
    if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
    }
    if (promptFight === "skip")  {
        //confirm skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes, leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money
            playerInfo.Money = Math.max(0, playerInfo.money - 10);
            
            return true;
}
    }
    return false;
}

//fight function
var fight = function(enemy) {
   //keep track of who goes first
   var isPlayerTurn = true;
if (Math.random() > 0.5) {
    isPlayerTurn = false;
}

    while(playerInfo.health > 0 && enemy.health > 0) {
       if (isPlayerTurn) {
        //ask player if they'd like to fight or skip
      if (fightOrSkip()) {
          break;
      }
    //remove enemy health by player attack
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
    enemy.health = Math.max(0, enemy.health - damage);
                   console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
                
                   //check enemy health
                   if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
//award player money for winning
                    playerInfo.money = playerInfo.money + 20;
//leave while loop for winning
                    break;
                   } else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
                //player gets attacked first
            } else {
                //player damage
              var damage = randomNumber(enemy.attack - 3, enemy.attack);
                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log (enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."); 
             
                //check player's health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + ' has died!');
                    break;
                }    else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }
            }
            //switch turn order
            isPlayerTurn = !isPlayerTurn;
              }
            }; 
 //at start of game          
var startGame = function() {
    playerInfo.reset ();
    for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert("Welcome to the Robot Gladiators! Round " + ( i + 1 ));
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40,60);
        // debugger;
        fight(pickedEnemyObj);
    //might have to move below out of function to standalone
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
   if (playerInfo.health > 0) {
       window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
shopOptionPrompt = parseInt(shopOptionPrompt);
switch(shopOptionPrompt) {
    case 1:
       playerInfo.refillHealth();
        break;
    case 2:
      playerInfo.upgradeAttack();
    break;
    case 3:
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
