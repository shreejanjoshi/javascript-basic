/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     // your code here

//     document.getElementById("run").addEventListener("click", function () {

//         async function getData() {
//             var api = await fetch("../../_shared/api.json");
//             var data = await api.json();
//             var name = data.heroes;

//             for (var i = name.length - 1; i > 0; --i) {
//                 if (name[i].id == document.getElementById("hero-id").value) {
//                     name.splice(i, 1);
//                     console.log(name);
//                 }
//             }
//         }
//         getData();
//     })

// })();

(() => {
    document.getElementById('run').addEventListener('click', function () {
        // store the api url
        var api = '../../_shared/api.json';

        // get the data from the api and store it
        async function getData() {
            var response = await fetch(api);
            var data = await response.json();
            var hero = data.heroes;

            var heroId = parseInt(document.getElementById('hero-id').value);

            for (var i = hero.length - 1; i >= 0; --i) {
                if (hero[i].id == heroId) {
                    hero.splice(i, 1);
                    console.log(hero);
                }
            }
        }
        getData();
    })
})();
