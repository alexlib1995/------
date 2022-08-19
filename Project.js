'use strict'

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");   

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const A = prompt("Один из последних просмотренных фильмов?", ""),
          B = prompt("На сколько оцените его?", "");

    if (A != null && B != null && A != "" && B != "" && A.length < 50) {
        personalMovieDB.movies[A] = B;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}
}

// rememberMyFilms();

function detectPersonalLelel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов", "")
    }else if (personalMovieDB.count < 30){
        console.log("Вы классический зритель", "")
    }else if (personalMovieDB.count >= 30){
        console.log("Вы киноман", "")
    }else {
        console.log("Произошла ошибка", "")
    }
}

// detectPersonalLelel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
