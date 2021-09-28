/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    /*
    var possible = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    var tag = "#";
    var button = document.getElementById("run");

    button.addEventListener("click", ()=>{
        for(var i=0; i<6; i++){
            var randomNumber = possible[Math.floor(Math.random() * possible.length)];

        }
        document.body.style.background = tag + randomNumber;


    })
    */



    let colors =["blue", "yellow", "green", "white", "red", "orange", "brown", "black"];

    let button = document.getElementById("run");

    button.addEventListener("click", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        document.body.style.background = randomColor;

    });

})();
