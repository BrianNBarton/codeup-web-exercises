(function() {
  "use strict";

  let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
  // var planetsArray;

  /**
   * TODO:
   * Convert planetsString to an array, and save it in a variable named
   * planetsArray.
   * console.log planetsArray to check your work
   */
//

  let planetsArray = console.log(planetsString.split(','));
  // console.log(planetsArray);

  /**
   * TODO:
   * Create a string with <br> tags between each planet. console.log() your
   * results. Why might this be useful?
   *
   * BONUS:
   * Create another string that would display your planets in an und=ordered
   * list. You will need an opening AND closing <ul> tags around the entire
   * string, and <li> tags around each planet.
   */

// })();
//  console.log(["Mercury",<br> "Venus", <br> "Earth", <br>"Mars",<br> "Jupiter",<br> "Saturn", <br>"Uranus",<br> "Neptune"]);
let arrayPlanets = planetsArray.join("<br>")
  console.log(arrayPlanets)
});


