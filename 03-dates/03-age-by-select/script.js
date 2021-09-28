/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    /*
    let day = document.getElementById("dob-day");
    let month = document.getElementById("dob-month");
    */
    let year = document.getElementById("dob-year");

    let button = document.getElementById("run");

    let today = new Date();

    /*
    let d = today.getDate();
    let m = today.getMonth() + 1;
    */
    let y = today.getFullYear();

    button.addEventListener("click",(days, months, years) =>{
        /*
        days = day.value;
        months = month.value;
         */
        years = year.value;

        if(/*day.value == "" || month.value == "" || */year.value == ""){
            alert("Pls! enter your Date of Birth properly");
        }

        let ageYear = y - years;

        /*

        if(m <= months){
            m = m + 12;
        }

        let ageMonth = m - month;

        let ageDays = (day - d) + parseInt(days);


         */

        alert("Your age is " + ageYear);
    })

})();
