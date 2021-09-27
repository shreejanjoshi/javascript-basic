/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
       function askQuestion()
    {
        var age = prompt("What is your age?");
        var gender = prompt("What is your gender?");
        var town = prompt("What is your town name");

        gender = gender.toLowerCase();
        town = town.toLowerCase();

        var info = confirm("Your age is " + age + " , gender " + gender + " and your town name is " + town + ".");

        if (info == false) {
            askQuestion();
        }
    }
    askQuestion();

})();
