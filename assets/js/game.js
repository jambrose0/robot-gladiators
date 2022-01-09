var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName,playerAttack,playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 102;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!")

//Subtract value of playerAttack from enemyHealth and use new value to update enemyHealth
enemyHealth = enemyHealth - playerAttack;
//Log a resulting message to console so we know it worked
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing.");
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
}
 fight (
     playerHealth = playerHealth - enemyAttack  );
      console.log (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');

}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}