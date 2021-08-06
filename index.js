/**
 * Name: Bennett Olsen
 * Date: 6.08.2021
 * Section: CSE 154 AD
 *
 * This zoomingo.js file populates the bingo board with game information.
 * This file also details interactions with the bingo cards.
 */
"use strict";

(function () {

  window.addEventListener("load", init);

  /**
   * Initializes the event listeners.
   */

  let list = ["Jumbo Stripe", "Christmas Cookies", "Modern Forest", "Vintage Fair Isle", "Milk & Cookies",
              "Frozen Plaid", "Dasher & Dancer", "Rustic Reindeer"];
  function init() {
    id("submit").addEventListener("click", () => {
      console.log("test");
      let results = calculateBalance();
      printResults(results);
      id("results").classList.remove("hidden");
    });
  }

  function printResults(results) {
    console.log(results);
    let tags = document.getElementsByClassName("result");
    console.log(tags);
    console.log(results[0]);
    for (let i = 0; i < tags.length; i++) {
      tags[i].textContent = list[i] + ": " + results[i];
    }
  }

  function calculateBalance() {
    let results = [0, 0, 0, 0, 0, 0, 0, 0];
    results = updateResults(results, id("bennett1"), 3);
    results = updateResults(results, id("bennett2"), 2);
    results = updateResults(results, id("bennett3"), 1);
    results = updateResults(results, id("jack1"), 3);
    results = updateResults(results, id("jack2"), 2);
    results = updateResults(results, id("jack3"), 1);
    results = updateResults(results, id("soren1"), 3);
    results = updateResults(results, id("soren2"), 2);
    results = updateResults(results, id("soren3"), 1);
    results = updateResults(results, id("vivika1"), 3);
    results = updateResults(results, id("vivika2"), 2);
    results = updateResults(results, id("vivika3"), 1);
    results = updateResults(results, id("callie1"), 3);
    results = updateResults(results, id("callie2"), 2);
    results = updateResults(results, id("callie3"), 1);
    return results;
  }

  function updateResults(results, element, weight) {
    let index = getNum(element);
    results[index] = results[index] + weight;
    return results;
  }

  function getNum(element) {
    if (element.value == "Jumbo Stripe") {
      return 0;
    } else if (element.value == "Christmas Cookies") {
      return 1;
    } else if (element.value == "Modern Forest") {
      return 2;
    } else if (element.value == "Vintage Fair Isle") {
      return 3;
    } else if (element.value == "Milk & Cookies") {
      return 4;
    } else if (element.value == "Frozen Plaid") {
      return 5;
    } else if (element.value == "Dasher & Dancer") {
      return 6;
    } else if (element.value == "Rustic Reindeer") {
      return 7;
    } else {
      return -1;
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Generates an element that matches the given HTML tag.
   * @param {string} el - HTML tag without <>
   * @returns {object} generated object
   */
  function gen(el) {
    return document.createElement(el);
  }

})();