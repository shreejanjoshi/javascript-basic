/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    var getApi = async () => {
        await fetch('../../_shared/api.json')

            .then(api => api.json())


            .then(data => {

                document.getElementById('run').addEventListener("click", function () {

                    data.heroes.map(hero => {

                        if (document.getElementById('hero-id').value == hero.id) {

                            //var hero = document.getElementById('tpl-hero').content.cloneNode(true);
                            // hero.querySelector('.name').innerText = temp.name;
                            //hero.getElementsByClassName("name").innerHTML = heroes.name;

                            //const article = document.querySelector('.name');
                            // The following would also work:
                            // const article = document.getElementById("electric-cars")

                            //console.log(article.dataset) // "3"
                            //article.dataset.indexNumber // "12314"
                            //article.dataset.parent // "cars"

                            var changeTemplate = document.getElementById('tpl-hero').content.cloneNode(true);
                            //cloneNode = clones the content of selected elements

                            //add the hero's content to the template
                            changeTemplate.querySelector(".name").textContent = hero.name;
                            changeTemplate.querySelector(".alter-ego").textContent = hero.alterEgo;
                            changeTemplate.querySelector(".powers").textContent = hero.abilities;

                            //add template as a list
                            document.getElementById("target").appendChild(changeTemplate);

                            console.log(hero);
                        }
                    })
                })
            })
    }
    getApi();


})();