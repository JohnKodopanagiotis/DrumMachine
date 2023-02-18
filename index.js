function play (str) {
    let displayScreen = document.getElementById('display')
    if (str === "q" || str=== "Q") {
         document.getElementById('display').innerHTML = "Heater 1"
    } else if (str === "w" || str=== "W") {
         document.getElementById('display').innerHTML = "Heater 2"
    } else if (str === "e" || str=== "E") {
         document.getElementById('display').innerHTML = "Heater 3"    
    } else if (str === "a" || str=== "A") {
         document.getElementById('display').innerHTML = "Heater 4"   
    } else if (str === "s" || str=== "S") {
         document.getElementById('display').innerHTML = "Clap"
    } else if (str === "d" || str=== "D") {
         document.getElementById('display').innerHTML = "Open HH"
    } else if (str === "z" || str=== "Z") {
         document.getElementById('display').innerHTML = "Kick n' Hat"
    } else if (str === "x" || str=== "X") {
         document.getElementById('display').innerHTML = "Kick"
    } else if (str === "c" || str=== "C") {
         document.getElementById('display').innerHTML = "Closed HH"
    } 
    var audio = document.getElementById(str);
    audio.play();
}
    window.document.onkeyup = function(event){
        let keypress = event.key
        if (keypress === "q" || keypress=== "Q") {
            play('Q')
        } else if (keypress === "w" || keypress=== "W") {
            play('W')
        } else if (keypress === "e" || keypress=== "E") {
            play('E')    
        } else if (keypress === "a" || keypress=== "A") {
            play('A')    
        } else if (keypress === "s" || keypress=== "S") {
            play('S')
        } else if (keypress === "d" || keypress=== "D") {
            play('D')
        } else if (keypress === "z" || keypress=== "Z") {
            play('Z')
        } else if (keypress === "x" || keypress=== "X") {
            play('X')
        } else if (keypress === "c" || keypress=== "C") {
            play('C')
        } 
    }