/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let text;

    if(hours >= 17 && hours <=18){
        if (min <= 30){
            text = "Hello"
        }else{
            text = "Good Evening"
        }
    }else if (hours >= 18){
        text = "Good Evening";
    }else{
        text = "Hello";
    }
    document.getElementById("target").innerHTML=text;

})();
