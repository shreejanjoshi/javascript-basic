/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function () {
        var api = "../../_shared/api.json";

        async function getData() {
            var read = await fetch(api);
            var data = await read.json();

            for (var i = 0; i < data.heroes.length; i++) {

                var hero = document.getElementById("tpl-hero").content.cloneNode(true);

                var show = data.heroes[i];

                hero.querySelector(".name").innerText = show.name;
                hero.querySelector(".alter-ego").innerText = show.alterEgo;
                hero.querySelector(".powers").innerText = show.abilities;

                document.getElementById("target").appendChild(hero);
            }
        }
        getData();
    })
})();
