/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function (operation) {
        // perform the operation
        switch (operation) {
            case "addition":
                const a = parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value);
                document.getElementById("result").innerHTML = a;
                break;
            case "substraction":
                const s = parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value);
                document.getElementById("result").innerHTML = s;
                break;
            case "multiplication":
                const m = parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value);
                document.getElementById("result").innerHTML = m;
                break;
            default:
                const d = parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value);
                document.getElementById("result").innerHTML = d;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function (
        $btn
    ) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });
})();
