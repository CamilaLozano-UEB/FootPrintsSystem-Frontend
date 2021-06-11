
/**
 Import the createbody function from tables.js and the variables are created
 */
import { createBody } from "./tables.js"

var previousTenLi = document.getElementById("previousTen");
var previousLi = document.getElementById("previous");
var pageLi = document.getElementById("page");
var nextLi = document.getElementById("next");
var nextTenLi = document.getElementById("next10");
var totalPages = document.getElementById("total");
var dataPets = [];

/**
 @param sublist, two-dimensional arrangement containing all the pet information
 function that assigns initial values of table location for paging
 */
function assignTableNavigationValues(subList) {
    dataPets = subList;
    pageLi.firstChild.textContent = "1";
    totalPages.firstChild.textContent = subList.length - 1;
    createBody(dataPets[0], 0);
    assignListeners();
}

/**
 Assign the listeners necessary to create the action in the top buttons of the navigation
 */

function assignListeners() {
    previousTenLi.addEventListener("click", handlePreviousTenLiEvent);
    previousLi.addEventListener("click", handlePreviousLiEvent);
    nextLi.addEventListener("click", handleNextLiEvent);
    nextTenLi.addEventListener("click", handleNextTenLiEvent);
}
/**
 Paging function that is responsible for going back 10 pages of the table from the current position.
 It takes the value of the current page and subtracts the 10 positions to go back. Send that array position to the table
 */
function handlePreviousTenLiEvent() {
    var actual = parseInt(pageLi.firstChild.textContent);
    if (actual <= 10) {
        pageLi.firstChild.textContent = "1";
        createBody(dataPets[0], 0);
    } else {
        pageLi.firstChild.textContent = (actual - 10);
        createBody(dataPets[actual - 11], actual - 11);
    }
}
/**
 Paging function that is responsible for going back one page from the current position.
 It takes the value of the current page and subtracts the one position to go back. Send that array position to the table
 */


function handlePreviousLiEvent() {
    var actual = parseInt(pageLi.firstChild.textContent);
    if (actual === 1) {
        pageLi.firstChild.textContent = "1";
        createBody(dataPets[0], 0);
    } else {
        pageLi.firstChild.textContent = (actual - 1);
        createBody(dataPets[actual - 2], actual - 2);
    }
}
/**
 Paging function that is responsible for advancing a page from the current position.
 It takes the value of the current page and adds the next position to it to advance. Send the next position of the array
 Send that array position to the table
 */

function handleNextLiEvent() {
    var actual = parseInt(pageLi.firstChild.textContent);
    var total = parseInt(totalPages.firstChild.textContent);
    if (actual < total) {
        pageLi.firstChild.textContent = (actual + 1);
        createBody(dataPets[actual + 1], actual + 1);
    }
}

/**
 Paging function that is responsible for advancing 10 pages from the current position.
 It takes the value of the current page and adds 10 positions to it to advance. Send that array position to the table
 */

function handleNextTenLiEvent() {
    var actual = parseInt(pageLi.firstChild.textContent);
    var total = parseInt(totalPages.firstChild.textContent);
    if (actual <= (total - 10)) {
        pageLi.firstChild.textContent = (actual + 10);
        createBody(dataPets[actual + 10], actual + 10);
    }
}
/**
 Export assignTableNavigationValues function
 */

export { assignTableNavigationValues };