/**
 * Created by Katlyn on 10/24/2016.
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 4 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieName;
let movieRating;
let averageRating;
let totalRating;{

}

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieName();
        setMovieRating();
        setAverageRating();
        setTotalRating();
        setContinueResponse();
        setCounter();
        for (let i = 0; i < MAX_RATING; i++) {
            printGoodbye();
        }
    }

    main();

    function setMovieName() {
        movieName = PROMPT.question(`Please enter a movie name:`);

    }

    function setMovieRating() {
        movieRating = Number(PROMPT.question(`Please enter the number of rating:`));

    }

    function setAverageRating() {
        averageRating = Number(PROMPT.question(`Please enter the number of the average rating:`));

    }

    function setTotalRating() {
        totalRating = Number(PROMPT.question(`Please enter the number of the total rating: `));

    }

    function setContinueResponse() {
        if (continueResponse != null) {
            continueResponse = -1;
            while (continueResponse !== 0 && continueResponse !== 1) {
                continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
            }
        } else {
            continueResponse = 1;
        }
    }

}