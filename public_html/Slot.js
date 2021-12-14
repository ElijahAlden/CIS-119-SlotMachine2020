// Start Up
var wager = 100;
var userWager; 
var Symbol = ["Cherries", "Oranges", "Plums", "Belles", "Melons", "Bars"];
var Rounds = 0;

// Buttons Control
document.getElementById('BetBut').addEventListener('click', betstart);
document.getElementById('DisplayBut').addEventListener('click', Display);

function Display () {
    alert("Standings -- Your Earnings = " + wager + " -- Rounds Played = " + Rounds);
}

// Checking Wager
function betstart () {
    if (wager <= 0) {
        document.write("Thanks for playing! <br>");
        document.write("Your earnings were " + wager + "$.<br>");
        document.write("And your total spins were = " + Rounds + ".<br>");
    } else {
        var KeepPlaying = confirm("Do you wish to retire or keep playing? (Keep playing = Okay & Stop = Cancel");
        if (KeepPlaying === true) {
            bet ();
        } else if (KeepPlaying === false) {
          document.write("Thanks for playing! <br>");
          document.write("Your earnings were " + wager + "$.<br>");
          document.write("And your total spins were = " + Rounds + ".<br>");  
        }
    }
}

//Placing Bet and Generating Random Slots
function bet () {
    Rounds++;
    var userWager = Number(prompt("Please enter your bet here -- Wager aloted = " + wager));
    if (userWager > wager) {
        Check ();
    } else {
        wager = wager - userWager;
    }
    
    // Here to make sure they enter allowed lot
function Check () {
    var userWager = Number(prompt("Please enter a number within your wager -- " + wager));
    if (userWager > wager) {
        Check ();
    } else {
        wager = wager - userWager;
    }}
    
    var image1 = Math.floor(Math.random ( ) * 6);
    var image2 = Math.floor(Math.random ( ) * 6);
    var image3 = Math.floor(Math.random ( ) * 6);
    var Object1 = Symbol[image1];
    var Object2 = Symbol[image2];
    var Object3 = Symbol[image3];
   
   
   
   
    alert(Object1 + Object2 + Object3);
   
    if ((image1 === image2) && (image2 === image3)) {
        alert("Wager *3 Won");
        wager = wager + (userWager * 3);
        alert("New Standings -- Your Earnings = " + wager + " -- Rounds Played = " + Rounds);

        
    } else if ((image1 === image2) || (image2 === image3) || (image1 === image3)){
        alert("Wager *2 Won");
        wager = wager + (userWager * 2);
        alert("New Standings -- Your Earnings = " + wager + " -- Rounds Played = " + Rounds);

    } else {
        alert("Wager Lost");
        alert("New Standings -- Your Earnings = " + wager + " -- Rounds Played = " + Rounds);
    }
    
}

