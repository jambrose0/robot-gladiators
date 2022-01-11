var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble",]
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        //ask player if they'd like to fight or skip

        // window.alert("Welcome to Robot Gladiators!")
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
           
      
                for(var i = 0; i < enemyNames.length; i++) {
                    if (playerHealth > 0) {
                        window.alert("Welcome to the Robot Gladiators! Round " + ( i + 1 ));
                        var pickedEnemyName = enemyNames[i];
                        enemyHealth = 50;
                        debugger;
                        fight(pickedEnemyName);
                    }
                    }
                    
    //Game States:
    // "WIN" - Player robot has defeated all enemy-robots
    //      * Fight all enemy-robots
    //      * Defeat each enemy-robot
    // "LOSE" - Player robot's health is zero or less



    //CODE BELOW TO DELETE??
     // if (promptFight === "fight" || promptFight === 'FIGHT') {
            // }           
            // else {
            //     fight ();
            // }
            // window.alert(playerName + " has chosen to skip the fight!");
            //    } else {
            //        window.alert("You need to choose a valid option. Try again!");
            //    }